import { InfoBasicEntity } from "@shared/models";
import { Hero } from "@shared/models/hero.model";

export interface Home extends InfoBasicEntity {
    hero: Hero;
}