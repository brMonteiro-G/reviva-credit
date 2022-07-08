import { User } from "./user";

export interface Card {
  userId: User;
  id: string;
  brand: string;
  number: string;
  cvv: number;
  limit: number;
  dueDate: number;
  expiresIn: string;
}
