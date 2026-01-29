import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { LoginResponse } from '../../shared/models/auth.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public showPassword = false;
  public loginForm!: FormGroup;

  disabled = '';
  active: any = 'Angular';
  showLoader?: boolean;

  errorMessage = '';

  public _error = { message: '' };

  public email = '';
  public password = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'error-1');

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.email = this.loginForm.controls['username'].value ?? '';
    this.password = this.loginForm.controls['password'].value ?? '';
  }

  get form() {
    return this.loginForm.controls;
  }

  login(): void {
    this.Submit();
  }

  Submit(): void {
    this.errorMessage = '';
    this._error.message = '';

    if (this.loginForm.invalid) {
      this.toastr.error('Invalid details', 'BusPulse', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      return;
    }

    const username = String(this.email ?? '').trim();
    const password = String(this.password ?? '');

    this.authservice.login({ usernameOrEmail: username, password }).subscribe({
      next: (user: LoginResponse) => {
        const role = (user.role ?? '').toLowerCase().trim();

        if (role === 'admin' || role === 'superadmin') {
          this.router.navigate(['/admin/dashboard'], { replaceUrl: true });
          return;
        }

        if (role === 'client') {
          this.router.navigate(['/client/dashboard'], { replaceUrl: true });
          return;
        }

        if (role === 'inspector') {
          this.router.navigate(['/dashboard'], { replaceUrl: true });
          return;
        }

        // fallback
        this.router.navigate(['/dashboard'], { replaceUrl: true });
        this.toastr.success('Login successful', 'BusPulse', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
      error: (error: HttpErrorResponse) => {
        const msg = error.error?.message ?? 'Invalid credentials';

        this._error.message = msg;
        this.errorMessage = msg;

        this.toastr.error(this.errorMessage, 'BusPulse', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      },
    });
  }

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnDestroy(): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    this.renderer.removeAttribute(bodyElement, 'class');
  }

  toggleClass = 'off-line';
  toggleVisibility(): void {
    this.showPassword = !this.showPassword;
    this.toggleClass = this.toggleClass === 'off-line' ? 'line' : 'off-line';
  }
}
