import { serviceTransactions } from "@/services/ServiceTransactions";
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
  transactions: ITransaction[];
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
});
TransactionsContext.displayName = "transactions";

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const getAllTransactions = async () => {
    setTransactions(await serviceTransactions());
  };

  useEffect(() => {
    getAllTransactions();
    console.log(transactions);
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};

export { useTransactions, TransactionsProvider };
