import { Routes } from "@angular/router";
import { ordersRoutesConfig } from "./config";
import { OrdersLayoutComponent } from "./product.layout";
import { CheckoutComponent } from "./components/checkout/checkout.component";

export const ordersRoutes: Routes = [
    {
        path: ordersRoutesConfig.base.path,
        component: OrdersLayoutComponent,
        children: [
            {
                path: ordersRoutesConfig.children.checkout.path,
                component: CheckoutComponent,
            },
        ]
    }
];    