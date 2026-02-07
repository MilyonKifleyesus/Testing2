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

  Submit(): void {
    this.login();
  }

  login() {
    console.log(this.loginForm)

    // this.disabled = "btn-loading"
    this.errorMessage = '';
    if (this.validateForm(this.email, this.password)) {
      this.authservice
        .loginWithEmail(this.email, this.password)
        .then((user: any) => {
          console.log('Login user object:', user);
          // Navigate based on user role
          if (user?.role === 'superadmin') {
            console.log('Navigating to admin dashboard');
            this.router.navigate(['/admin/dashboard']);
          } else if (user?.role === 'client' || user?.role === 'user') {
            console.log('Navigating to client dashboard');
            this.router.navigate(['/client/dashboard']);
          } else {
            console.log('Navigating to default dashboard');
            this.router.navigate(['/dashboard']);
          }
          console.clear();
          this.toastr.success('login successful','spruha', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        })
        .catch((_error: any) => {
          this._error = _error;
          this.router.navigate(['/']);
        });
     
    }
    else {
      this.toastr.error('Invalid details','spruha', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    }
  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
    
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
