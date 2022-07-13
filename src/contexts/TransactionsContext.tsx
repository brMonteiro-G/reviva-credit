import { serviceTransactions } from "@/services/ServiceTransactions";
import { ICard } from "@/types/ICard";
import { ITransaction } from "@/types/ITransaction";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextProps {
  calculateTotal: () => number;
  transactionsByCard: ITransaction[];
  getTransactionsByCard: (card: ICard) => void;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  calculateTotal: () => 0,
  transactionsByCard: [],
  getTransactionsByCard: () => {},
});
TransactionsContext.displayName = "transactions";

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactionsByCard, setTransactionsByCard] = useState<ITransaction[]>(
    []
  );

  const getTransactionsByCard = async (card: ICard) => {
    const transactions = await serviceTransactions();
    if (transactions) {
      const transactionsFiltered = transactions.filter(
        (transaction) => transaction.cardId === card?.id
      );
      return setTransactionsByCard(transactionsFiltered);
    }
  };

  const calculateTotal = () => {
    const mesAtual = new Date().getMonth() - 1;
    const total = transactionsByCard
      .filter((transaction) => {
        const dateLimit = new Date(transaction.date);
        return dateLimit.getMonth() === mesAtual;
      })
      .reduce((prev, acm) => (prev += acm.value), 0);
    return total;
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ getTransactionsByCard, transactionsByCard, calculateTotal }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};

export { useTransactions, TransactionsProvider };
