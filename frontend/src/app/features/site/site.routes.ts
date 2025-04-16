import { Routes } from "@angular/router";
import { HomePage } from "./pages";
import { siteRoutesConfig } from "./config";

export const siteRoutes: Routes = [
    {
        path: siteRoutesConfig.base.url,
        component: HomePage
    }
]