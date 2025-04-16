import { Routes } from '@angular/router';
import { siteRoutes } from '@features/site';
import { branchRoutes } from '@features/branch';
import { NotFoundPage } from '@shared/pages/not-found.page';

export const routes: Routes = [...siteRoutes, ...branchRoutes, { path: '**', component: NotFoundPage }];
