import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, CurrentUser } from '../../../shared/services/auth.service';
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

    this.authService.loginWithRole(username, password).subscribe({
      next: (user: CurrentUser) => {
        // Load menu based on user role
        this.navService.loadMenuByRole(user.role || 'admin');
        
        // Navigate based on role
        if (user.role === 'superadmin') {
          this.router.navigate(['/admin/dashboard']);
        } else if (user.role === 'client' || user.role === 'user') {
          this.router.navigate(['/client/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
        this.loading = false;
      },
      error: (error: any) => {
        this.errorMessage = error.message || 'Invalid username or password';
        this.loading = false;
      }
    });
  }
}
