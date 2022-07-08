import { IUser } from "@/types/IUser";
import { createContext, ReactNode, useState } from "react";

export interface UsersProviderProps {
  children: ReactNode;
}

interface IUserContextProps {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

export const UsersContext = createContext<IUserContextProps>({
  users: [],
  setUsers: (users: IUser[]) => [],
});
UsersContext.displayName = "Users";

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
