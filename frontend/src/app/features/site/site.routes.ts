import { Routes } from "@angular/router";
import { HomePage } from "./pages";
import { siteRoutesConfig } from "./config";
import { SiteLayout } from "./site.layout";

export const siteRoutes: Routes = [
    {
        path: siteRoutesConfig.base.url,
        component: SiteLayout,
        children: [
            {
                path: '',
                component: HomePage
            }
        ]
    }
]