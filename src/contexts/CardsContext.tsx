import { ICard } from "@/types/ICard";
import { IUser } from "@/types/IUser";
import { createContext, ReactNode, useContext, useState } from "react";
import { Cards } from "./mockData";

type CardsContextProps = {
  children: ReactNode;
};

type CardContextType = {
  cards: ICard[];
  setCards: (cards: ICard[]) => void;
  cardsByUser: ({ id }: IUser) => void;
};

const initialValue = {
  cards: Cards,
  setCards: () => {},
  cardsByUser: () => {},
};

export const CardsContext = createContext<CardContextType>(initialValue);
CardsContext.displayName = "Cards";

const CardsProvider = ({ children }: CardsContextProps) => {
  const [cards, setCards] = useState<ICard[]>(Cards);

  const cardsByUser = ({ id }: IUser) => {
    const cardsFiltered = cards.filter((card) => card.userId === id);
    return cardsFiltered;
  };

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
