import { Image, InfoBasicEntity } from "@shared/models";

export interface Profile extends InfoBasicEntity{
    phone: string;
    fristName: string;
    lastName: string;
    birthday: Date;
    avatar: Image;
}