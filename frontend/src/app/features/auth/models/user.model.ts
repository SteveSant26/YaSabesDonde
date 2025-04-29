import { InfoBasicEntity } from "@shared/models";

export interface User extends InfoBasicEntity {
  jwt: string;
  username: string;
  email: string;
}
