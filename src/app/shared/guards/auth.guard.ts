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

  const expectedRoles = route.data?.['roles'] as string[] | undefined;

  if (!expectedRoles || expectedRoles.length === 0) return true;

  if (authService.hasRole(expectedRoles)) return true;

  const userRole = authService.userRole;

  if (userRole === 'superadmin' || userRole === 'admin') {
    return router.parseUrl('/admin/dashboard');
  }

  if (userRole === 'client') {
    return router.parseUrl('/client/dashboard');
  }

  return router.parseUrl('/dashboard');
};
