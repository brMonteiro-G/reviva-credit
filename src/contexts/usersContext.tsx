import { ProviderProps } from "@/types/IUProviderProps";
import { IUser } from "@/types/IUser";
import { createContext, useState } from "react";

interface IUserContextProps {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

export const UsersContext = createContext<IUserContextProps>({
  users: [],
  setUsers: (users: IUser[]) => [],
});
UsersContext.displayName = "Users";

export const UsersProvider = ({ children }: ProviderProps) => {
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
