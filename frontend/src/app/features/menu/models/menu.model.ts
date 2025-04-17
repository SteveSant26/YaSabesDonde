import { InfoBasicEntity, Meta } from "@shared/models";
import { Product } from "@features/product/models";

export interface Menu extends InfoBasicEntity {
    name: string;
    description: string;
    products?: Product[];
}

export interface MenuResponse {
    data: Menu[];
    meta: Meta;
}