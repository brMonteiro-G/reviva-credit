import { converterDataStringToDate } from "@/functions";
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
  orderInvoiceByMonth: (month: number) => ITransaction[];
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  calculateTotal: () => 0,
  transactionsByCard: [],
  getTransactionsByCard: () => {},
  orderInvoiceByMonth: () => [],
});
TransactionsContext.displayName = "transactions";

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactionsByCard, setTransactionsByCard] = useState<ITransaction[]>(
    []
  );

  const orderInvoiceByMonth = (month: number): ITransaction[] => {
    const transactions = transactionsByCard;
    const transactionsByMonth = transactions.filter((transaction) => {
      const transactionDate = converterDataStringToDate(
        transaction.date
      ).getMonth();
      return transactionDate === month;
    });
    return transactionsByMonth;
  };

  const orderTransactions = (transactions: ITransaction[]) => {
    return transactions.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  };

  const getTransactionsByCard = async (card: ICard) => {
    const transactions = await serviceTransactions();
    if (transactions) {
      const transactionsFiltered = transactions.filter(
        (transaction) => transaction.cardId === card?.id
      );
      orderTransactions(transactionsFiltered);
      return setTransactionsByCard(transactionsFiltered);
    }
  };

  const calculateTotal = () => {
    const currentDate = new Date();
    const total = transactionsByCard
      .filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate.getMonth() === currentDate.getMonth() - 1 &&
          transactionDate.getDate() >= currentDate.getDate()
        );
      })
      .reduce((prev, acm) => (prev += acm.value), 0);
    return total;
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        getTransactionsByCard,
        transactionsByCard,
        calculateTotal,
        orderInvoiceByMonth,
      }}
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
