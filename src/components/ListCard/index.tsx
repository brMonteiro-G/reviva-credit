import { useCardInFocus } from "@/contexts/CardInFocus";
import { useCard } from "@/contexts/CardsContext";
import { useTransactions } from "@/contexts/TransactionsContext";
import { useEffect, useState } from "react";
import { moveScrollOnClick, updateFocusState } from "../MonthBar";
import Card from "./Card";
import { ContainerListCard, ListCard } from "./style";

interface ListCardProps {
  onClick?: () => void;
}

export const updateScrollOnLoad = (focusedCard: number, idTag: string) => {
  const currentItems = document.querySelector(`#${idTag}`);
  currentItems?.scrollBy({
    left: +(focusedCard * 100),
  });
};

const CarouselCard = ({ onClick }: ListCardProps) => {
  const { cardFocus, setIndexCurrentCard, indexCurrentCard, setCardFocus } =
    useCardInFocus();

  const { cards, userCard } = useCard();
  const { getTransactionsByCard } = useTransactions();

  useEffect(() => {
    updateScrollOnLoad(indexCurrentCard, "list-card");
  }
  , []);

  useEffect(() => {
    setCardFocus(cards[indexCurrentCard]);
    getTransactionsByCard(cards[indexCurrentCard]);
  }, [indexCurrentCard, cards]);

  return (
    <ContainerListCard>
      <ListCard
        id="list-card"
        onClick={onClick}
        onScroll={() => {
          updateFocusState("card", setIndexCurrentCard);
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            name={userCard.name}
            brand={card.brand}
            cvv={card.cvv}
            expiresIn={card.expiresIn}
            number={card.number}
            onClick={() =>
              moveScrollOnClick(indexCurrentCard, index, "list-card", "card")
            }
          />
        ))}
      </ListCard>
    </ContainerListCard>
  );
};

export default CarouselCard;
