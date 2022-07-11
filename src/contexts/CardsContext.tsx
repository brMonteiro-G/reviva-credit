import { ICard } from "@/types/ICard";
import { IUser } from "@/types/IUser";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUsers } from "./usersContext";

type CardsContextProps = {
  children: ReactNode;
};

type CardContextType = {
  cards: ICard[];
  userCard: IUser;
};

const initialValue = {
  cards: [],
  userCard: { id: "", name: "" },
};

export const CardsContext = createContext<CardContextType>(initialValue);
CardsContext.displayName = "Cards";

const CardsProvider = ({ children }: CardsContextProps) => {
  const [cards, setCards] = useState<ICard[]>(initialValue.cards);

  const { users } = useUsers();

  const userCard = users[0];
  const cardsFiltered = cards.filter((card) => card.userId === userCard.id);

  useEffect(() => {
    // setCards(cardsFiltered);
  }, []);

  useEffect(() => {
    // teste();
    console.log('cards',cards);
    
  }, [cards]);
  console.log(cards);
  
  return (
    <CardsContext.Provider value={{ cards, userCard }}>
      {children}
    </CardsContext.Provider>
  );
};

const useCard = () => {
  const context = useContext(CardsContext);
  return context;
};

export { useCard, CardsProvider };
