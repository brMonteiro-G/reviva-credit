
import { ITransaction } from "@/types/ITransaction";
import { createContext, ReactNode, useState } from "react";

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextProps {
  transactions: ITransaction[];
  setTransactions: (transactions: ITransaction[]) => void;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
  setTransactions: (transactions: ITransaction[]) => [],
});
TransactionsContext.displayName = "transactions";

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
