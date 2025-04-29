import { Image } from "./image.model";

export interface Hero  {
    title: string;
    image: Image;
    description?: string;
    btnText?: string;
    poster?: Image;
}