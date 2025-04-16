import { Routes } from '@angular/router';
import { siteRoutes } from './feactures/site';
import { branchRoutes } from './feactures/branch';

export const routes: Routes = [...siteRoutes, ...branchRoutes];
