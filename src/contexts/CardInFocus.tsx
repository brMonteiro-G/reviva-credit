import { serviceUsers } from "@/services/ServiceUser";
import { ICard } from "@/types/ICard";
import { IUser } from "@/types/IUser";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCard } from "./CardsContext";

export interface CardFocusProviderProps {
  children: ReactNode;
}

interface ICardFocusContextProps {
  cardFocus: ICard;
  setCardFocus: (cardFocus: ICard) => void;
  indexCurrentCard: number;
  setIndexCurrentCard: React.Dispatch<React.SetStateAction<number>>;
}

const initialValue = {
  cardFocus: {} as ICard,
  setCardFocus: () => {},
  indexCurrentCard: 0,
  setIndexCurrentCard: () => {},
};

export const CardFocusContext =
  createContext<ICardFocusContextProps>(initialValue);

CardFocusContext.displayName = "ICardFocus";

const CardFocusProvider = ({ children }: CardFocusProviderProps) => {
  const [cardFocus, setCardFocus] = useState<ICard>({} as ICard);
  const [indexCurrentCard, setIndexCurrentCard] = useState(0);

  return (
    <CardFocusContext.Provider
      value={{
        cardFocus,
        setCardFocus,
        indexCurrentCard,
        setIndexCurrentCard,
      }}
    >
      {children}
    </CardFocusContext.Provider>
  );
};

const useCardInFocus = () => {
  const { cards, userCard } = useCard();

  const { cardFocus, indexCurrentCard, setCardFocus, setIndexCurrentCard } =
    useContext(CardFocusContext);

  return {
    cardFocus: cards[indexCurrentCard],
    setCardFocus,
    indexCurrentCard,
    setIndexCurrentCard,
  };
};

export { useCardInFocus, CardFocusProvider };
