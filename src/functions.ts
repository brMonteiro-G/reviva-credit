import { ICard } from "./types/ICard";
import { ITransaction } from "./types/ITransaction";

export const formactPrice = (preco: number): string => 
new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(preco);

export const formatDate = (date: string, dateFull?: boolean) => {
  const dateTemp = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(dateTemp);
  return dateFull ? formattedDate : formattedDate.slice(0, -5)
};

export const converterDataStringToDate = (data: string) => {
  const date = new Date(data);
  return date;
}

export const addCardNumberMask = (listCard: ICard[]) => {
  listCard.forEach(card => {
    card.number = card.number.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ');
  }
  );
  return listCard;
}

export const getCurrentMonth = (): number => {
  const currentDate = new Date();
  return currentDate.getMonth();
}

export const getFullAmountMonthly = (currentMonth: ITransaction[]) => {
  return currentMonth.reduce((acc, transaction) => {
    return acc + transaction.value;
  }, 0);
};