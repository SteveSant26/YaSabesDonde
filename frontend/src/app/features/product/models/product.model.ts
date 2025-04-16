import { Image, InfoBasicEntity } from "@shared/models";
import { Price } from "./price.model";
import { Meta } from "@angular/platform-browser";

export interface Product extends InfoBasicEntity {
    name: string;
    description: string;
    images: Image[];
    price : Price;
}

export interface ProductResponse {
    data: Product[];
    meta: Meta;
}