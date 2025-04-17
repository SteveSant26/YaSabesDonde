import { InfoBasicEntity } from "@shared/models";
import { Hero } from "@shared/models/hero.model";

export interface AboutUs extends InfoBasicEntity {
    hero: Hero;
}