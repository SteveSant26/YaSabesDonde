import { InfoBasicEntity } from "./info-basic-entity.model";

interface infoBasicImage {
  name: string;
  url: string;
}
export interface Image extends infoBasicImage, InfoBasicEntity {
  thumbnail?: infoBasicImage;
  medium?: infoBasicImage;
  small?: infoBasicImage;
  large?: infoBasicImage;
}
