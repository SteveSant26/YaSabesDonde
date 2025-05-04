import { Image, InfoBasicEntity } from "@shared/models";
import { Meta } from "@angular/platform-browser";
import { CategoryProduct } from "@features/category-products/models";

export interface Product extends InfoBasicEntity {
    name: string;
    description: string;
    images: Image[];
    price : number;
    categoryProducts?: CategoryProduct;
    quantity?: number
}

export interface ProductResponse {
    data: Product[];
    meta: Meta;
}