import { Image, InfoBasicEntity, Meta } from "@shared/models";
import { Product } from "@features/product/models";

export interface CategoryProduct extends InfoBasicEntity {
    name: string;
    description: string;
    products?: Product[];
    image?: Image;
}

export interface CategoryProductsResponse {
    data: CategoryProduct[];
    meta: Meta;
}