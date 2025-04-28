import { Routes } from '@angular/router';
import { siteRoutes } from '@features/site';
import { branchRoutes } from '@features/branch';
import { NotFoundPage } from '@shared/pages/not-found.page';
import { productRoutes } from '@features/product';
import { menuRoutes } from '@features/menu';
import { authRoutes } from '@features/auth';

export const routes: Routes = [
  ...siteRoutes,
  ...branchRoutes,
  ...productRoutes,
  ...menuRoutes,
  ...authRoutes,
  { path: '**', component: NotFoundPage },
];
