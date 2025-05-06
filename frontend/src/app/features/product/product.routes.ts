import { Routes } from "@angular/router";
import { productRoutesConfig } from "./config";
import { ProductLayoutComponent } from "./product.layout";

export const productRoutes: Routes = [
    {
        path: productRoutesConfig.base.path,
        component: ProductLayoutComponent,

    }
];