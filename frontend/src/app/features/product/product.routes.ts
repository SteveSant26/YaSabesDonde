import { Routes } from "@angular/router";
import { productRoutesConfig } from "./config";
import { ProductLayoutComponent } from "./product.layout";
import { ProductPage } from "./pages";

export const productRoutes: Routes = [
    {
        path: productRoutesConfig.base.path,
        component: ProductLayoutComponent,
        children: [
            {
                path: productRoutesConfig.children.detail.path,
                component: ProductPage
            }
        ]
    }
];