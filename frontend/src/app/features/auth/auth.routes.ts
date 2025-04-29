import { Routes } from '@angular/router';
import { AuthLayout } from './auth.layout';
import { LoginPage, RegisterPage } from './pages';
import { authRoutesConfig } from './config';
import { isLoggedGuard, isNotLoggedGuard } from './guards';

export const authRoutes: Routes = [
  {
    path: authRoutesConfig.base.path,
    component: AuthLayout,
    children: [
      {
        path: authRoutesConfig.children.login.path,
        component: LoginPage,
        canActivate: [isLoggedGuard],
      },
      {
        path: authRoutesConfig.children.register.path,
        component: RegisterPage,
        canActivate: [isLoggedGuard],
      },
    ],
  },
];
