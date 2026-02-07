import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) return true;

  return router.createUrlTree(['/custom/sign-in'], {
    queryParams: { returnUrl: state.url },
  });
};

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/custom/sign-in'], {
      queryParams: { returnUrl: state.url },
    });
  }

  const expectedRoles = route.data['roles'] as string[];
  
  if (expectedRoles && !authService.hasRole(expectedRoles)) {
    // Role not authorized, redirect to dashboard
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
