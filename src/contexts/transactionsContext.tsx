import { IUTransactions } from "@/types/IUTransactions";
import { createContext, ReactNode, useState } from "react";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextProps {
  transactions: IUTransactions[];
  setTransactions: (transactions: IUTransactions[]) => void;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
  setTransactions: (transactions: IUTransactions[]) => [],
});
TransactionsContext.displayName = "transactions";

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<IUTransactions[]>([]);
  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
