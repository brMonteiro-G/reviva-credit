import { ITransactions } from "@/types/ITransactions";
import { createContext, ReactNode, useContext, useState } from "react";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextProps {
  transactions: ITransactions[];
  setTransactions: (transactions: ITransactions[]) => void;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
  setTransactions: (transactions: ITransactions[]) => [],
});
TransactionsContext.displayName = "transactions";

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};

export { useTransactions, TransactionsProvider };
