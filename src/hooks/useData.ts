import { useCard } from "@/contexts/CardsContext";
import { useTransactions } from "@/contexts/TransactionsContext";
import { useUsers } from "@/contexts/UsersContext";

export const useData = () => {
  const { users } = useUsers();
  const { cards } = useCard();
  const { transactions } = useTransactions();

  const obj = {
    users: [...users],
    cards: [...cards],
    transactions: [...transactions]
  }

  return { users, cards, transactions, obj };
};
