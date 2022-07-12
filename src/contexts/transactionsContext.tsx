import { getTransactions } from "@/services/getTransactions";
import { ITransactions } from "@/types/ITransactions";
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
  transactions: ITransactions[];
  // setTransactions: (transactions: ITransactions[]) => void;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
  // setTransactions: (transactions: ITransactions[]) => [],
});
TransactionsContext.displayName = "transactions";

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  const getAllTransactions = async () => {
    setTransactions(await getTransactions());
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
