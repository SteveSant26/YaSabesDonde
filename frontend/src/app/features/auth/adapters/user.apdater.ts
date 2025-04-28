import { User } from '../models';

export const userAdapter = (user: any): User => {
  return {
    jwt: user.jwt,
    id: user.user.id,
    username: user.user.username,
    email: user.user.email,
    createdAt: user.user.createdAt  ,
    documentId: user.user.documentId,
  };
};
