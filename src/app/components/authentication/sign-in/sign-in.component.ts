import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';
import { NavService } from '../../../shared/services/nav.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navService: NavService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) return;

    this.loading = true;
    const { username, password } = this.loginForm.value;

    this.authService
      .login({
        usernameOrEmail: username,
        password,
      })
      .subscribe({
        next: (res) => {
          const role = (res.role ?? '').toLowerCase().trim();

          this.navService.loadMenuByRole(role);

          if (role === 'superadmin' || role === 'admin') {
            console.log('Navigating to admin dashboard');
            this.router.navigate(['/admin/dashboard'], { replaceUrl: true });
          } else if (role === 'client') {
            this.router.navigate(['/client/dashboard'], { replaceUrl: true });
          } else {
            this.router.navigate(['/dashboard'], { replaceUrl: true });
          }

          this.loading = false;
        },
        error: (err) => {
          this.errorMessage =
            err?.error?.message ||
            err?.message ||
            'Invalid username or password';
          this.loading = false;
        },
      });
  }
}
