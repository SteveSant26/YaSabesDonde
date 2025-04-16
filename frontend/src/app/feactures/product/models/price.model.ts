import { InfoBasicEntity } from "@shared/models";

export interface Price extends InfoBasicEntity {
    price: number;
    name: string;
}