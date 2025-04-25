import { Image, InfoBasicEntity } from "@shared/models";
import { Price } from "./price.model";
import { Meta } from "@angular/platform-browser";
import { CategoryProduct } from "@features/category-products/models";

export interface Product extends InfoBasicEntity {
    name: string;
    description: string;
    images: Image[];
    price : Price;
    categoryProducts?: CategoryProduct;
}

export interface ProductResponse {
    data: Product[];
    meta: Meta;
}