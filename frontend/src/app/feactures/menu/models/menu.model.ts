import { InfoBasicEntity, Meta } from "@shared/models";
import { Product } from "app/feactures/product/models";

export interface Menu extends InfoBasicEntity {
    name: string;
    description: string;
    products?: Product[];
}

export interface MenuResponse {
    data: Menu[];
    meta: Meta;
}