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
  // setTransactions: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
  // setTransactions: {}
});
TransactionsContext.displayName = "transactions";

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const getAllTransactions = async () => {
    setTransactions(await serviceTransactions());
  };

  useEffect(() => {
    getAllTransactions();
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
