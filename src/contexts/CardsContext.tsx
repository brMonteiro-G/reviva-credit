import { serviceCards } from "@/services/ServiceCards";
import { ICard } from "@/types/ICard";
import { IUser } from "@/types/IUser";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type CardsContextProps = {
  children: ReactNode;
};

type CardContextType = {
  cards: ICard[];
  setCards: Dispatch<SetStateAction<ICard[]>>;
  cardsByUser: ({ id }: IUser) => void;
};

const initialValue = {
  cards: [],
  setCards: () => [],
  cardsByUser: () => {},
};

export const CardsContext = createContext<CardContextType>(initialValue);
CardsContext.displayName = "Cards";

const CardsProvider = ({ children }: CardsContextProps) => {
  const [cards, setCards] = useState<ICard[]>([]);

  const cardsByUser = ({ id }: IUser) => {
    const cardsFiltered = cards.filter((card) => card.userId === id);
    return cardsFiltered;
  };
  const teste = async () => {
    await serviceCards(cards, setCards);
  };

  useEffect(() => {
    // teste();
    console.log('cards',cards);
    
  }, [cards]);
  console.log(cards);
  
  return (
    <CardsContext.Provider value={{ cards, setCards, cardsByUser }}>
      {children}
    </CardsContext.Provider>
  );
};

const useCard = () => {
  const context = useContext(CardsContext);
  return context;
};

export { useCard, CardsProvider };
