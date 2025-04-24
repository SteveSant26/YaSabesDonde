import { InfoBasicEntity } from "./info-basic-entity.model";

export interface Video extends InfoBasicEntity {
  name: string;
  description: string;
  url: string;
}
