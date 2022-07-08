import { Card } from "./card";

export interface Transaction {
  id: string;
  cardId: Card;
  value: number;
  description: string;
  date: string;
}
