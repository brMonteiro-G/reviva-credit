import { serviceCards } from "@/services/ServiceCards";
import { ICard } from "@/types/ICard";
import { IUser } from "@/types/IUser";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUsers } from "./UsersContext";

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

  const getCardsByUser = async () => {
    const getAllCards = await serviceCards();
    const cardsFiltered = getAllCards.filter(
      (card) => card.userId === userCard.id
    );

    setCards(cardsFiltered);
    return cardsFiltered;
  };

  useEffect(() => {
    getCardsByUser();
    console.log(userCard);
  }, []);

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
