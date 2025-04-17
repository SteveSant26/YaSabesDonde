import { Image, InfoBasicEntity, Meta } from "@shared/models";

export interface Branch extends InfoBasicEntity {
    name: string;
    description: string;
    phone: string;
    address: string;
    image: Image[];
}

export interface Branches {
    data: Branch[];
    meta: Meta;
}