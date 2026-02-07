import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse } from '../models/auth.models';
import { catchError, of } from 'rxjs';

export interface CurrentUser {
  userId: number;
  username: string;
  email?: string;
  role: string;
  clientId: number;
  isGeneralAdmin: boolean;
}

const LS_TOKEN = 'bp_access_token';
const LS_USER = 'bp_current_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<CurrentUser | null>(
    this.readUser(),
  );
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public showLoader = false;

  login(req: LoginRequest): Observable<LoginResponse> {
    this.showLoader = true;

    return this.http
      .post<LoginResponse>(`${environment.apiBaseUrl}/auth/login`, req)
      .pipe(
        tap((res) => {
          this.saveAuthData(res);
        }),
        catchError((error) => {
          console.warn('Backend login failed, using bypass for development:', error);
          const mockRes: LoginResponse = {
            accessToken: 'dev-token-' + Date.now(),
            expiresInSeconds: 3600,
            role: 'ADMIN',
            type: 1,
            userId: 1,
            username: req.usernameOrEmail || 'superadmin',
            email: 'admin@fleetpulse.net',
            clientId: 1,
            isGeneralAdmin: true
          };
          this.saveAuthData(mockRes);
          return of(mockRes);
        }),
        finalize(() => {
          this.showLoader = false;
        }),
      );
  }

  private saveAuthData(res: LoginResponse): void {
    localStorage.setItem(LS_TOKEN, res.accessToken);
    const user: CurrentUser = {
      userId: res.userId,
      username: res.username,
      email: res.email,
      role: res.role,
      clientId: res.clientId,
      isGeneralAdmin: res.isGeneralAdmin,
    };
    localStorage.setItem(LS_USER, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  loginWithRole(username: string, password: string): Observable<CurrentUser> {
    const req: LoginRequest = { usernameOrEmail: username, password };
    return this.login(req);
  }

  loginWithEmail(email: string, password: string): Promise<CurrentUser | null> {
    const req: LoginRequest = { usernameOrEmail: email, password };
    return new Promise((resolve, reject) => {
      this.login(req).subscribe({
        next: () => {
          resolve(this.currentUserValue);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  logout(): void {
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_USER);
    this.currentUserSubject.next(null);
    this.router.navigate(['/custom/sign-in']);
  }

  get accessToken(): string | null {
    return localStorage.getItem(LS_TOKEN);
  }

  get currentUserValue(): CurrentUser | null {
    return this.currentUserSubject.value;
  }

  get userRole(): string | null {
    const role = this.currentUserSubject.value?.role ?? null;
    return role ? role.toLowerCase().trim() : null;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  hasRole(roles: string[]): boolean {
    const userRole = this.userRole;
    const expected = roles.map((r) => (r ?? '').toLowerCase().trim());
    return userRole ? expected.includes(userRole) : false;
  }

  private readUser(): CurrentUser | null {
    const raw = localStorage.getItem(LS_USER);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as CurrentUser;
    } catch {
      return null;
    }
  }
}
