import { Routes } from '@angular/router';
import { siteRoutes } from '@features/site';
import { branchRoutes } from '@features/branch';
import { NotFoundPage } from '@shared/pages/not-found.page';
import { productRoutes } from '@features/product';

export const routes: Routes = [...siteRoutes, ...branchRoutes, ...productRoutes, { path: '**', component: NotFoundPage }];
