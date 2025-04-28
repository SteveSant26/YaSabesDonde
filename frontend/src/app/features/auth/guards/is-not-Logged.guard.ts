import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services';
import { authRoutesConfig } from '../config';

export const isNotLoggedGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  const isAuthenticated = userService.isAuthenticated();

  if (!isAuthenticated()) {
    router.navigate([authRoutesConfig.children.login.url])
    return false
  }

  return true;
};
