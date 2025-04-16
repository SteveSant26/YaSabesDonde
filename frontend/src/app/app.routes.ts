import { Routes } from '@angular/router';
import { siteRoutes } from '@feactures/site';
import { branchRoutes } from '@feactures/branch';
import { NotFoundPage } from '@shared/pages/not-found.page';

export const routes: Routes = [...siteRoutes, ...branchRoutes, { path: '**', component: NotFoundPage }];
