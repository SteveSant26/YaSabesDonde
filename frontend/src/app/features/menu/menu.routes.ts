import { Routes } from "@angular/router";
import { menuRoutesConfig } from "./config";
import { MenuLayout } from "./menu.layout";
import { ListMenusPage, MenuPage } from "./pages";

export const menuRoutes: Routes = [
    {
        path: menuRoutesConfig.base.path,
        component: MenuLayout,
        children: [
            {
                path: "",
                component: ListMenusPage
            },
            {
                path: menuRoutesConfig.children.detail.path,
                component: MenuPage,
                data: {
                    renderMode: 'server'
                }
            }
        ]
    }
]