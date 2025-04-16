import { InfoBasicEntity, Meta } from "@shared/models";
import { Product } from "app/feactures/product/models";

export interface CategoryProducts extends InfoBasicEntity {
    name: string;
    description: string;
    products?: Product[];
}

export interface CategoryProductsResponse {
    data: CategoryProducts[];
    meta: Meta;
}