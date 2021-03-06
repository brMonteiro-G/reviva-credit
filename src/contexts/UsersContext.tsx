import { serviceUsers } from "@/services/ServiceUser";
import { IUser } from "@/types/IUser";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    setUsers(await serviceUsers());
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  const context = useContext(UsersContext);
  return context;
};

export { useUsers, UsersProvider };
