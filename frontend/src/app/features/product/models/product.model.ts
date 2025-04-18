import { Image, InfoBasicEntity } from "@shared/models";
import { Price } from "./price.model";
import { Meta } from "@angular/platform-browser";
import { CategoryProducts } from "@features/category-products/models";

export interface Product extends InfoBasicEntity {
    name: string;
    description: string;
    images: Image[];
    price : Price;
    categoryProducts?: CategoryProducts;
}

export interface ProductResponse {
    data: Product[];
    meta: Meta;
}