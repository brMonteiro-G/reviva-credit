import { CardsContext, useCard } from "@/contexts/CardsContext";
import { serviceCards } from "@/services/ServiceCards";
import { useContext, useEffect, useState } from "react";
import { moveScrollOnClick, updateFocusState } from "../MonthBar";
import Card from "./Card";
import { ContainerListCard, ListCard } from "./style";

interface ListCardProps {
  onClick?: () => void;
}

const CarouselCard = ({ onClick }: ListCardProps) => {
  const [focusedCard, setFocusedCard] = useState(0);
  const { cards, setCards } = useCard();

  console.log("cards",cards);

  useEffect(() => {
    console.log(focusedCard);
  }, [focusedCard, cards]);

 
  
  return (
    <>
      <ContainerListCard>
        <ListCard
          id="list-card"
          onClick={onClick}
          onScroll={() => {
            updateFocusState("card", setFocusedCard);
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              name="Renato Neto"
              brand={card.brand}
              cvv={card.cvv}
              dueDate={card.dueDate}
              number={card.number}
              onClick={() => moveScrollOnClick(focusedCard, index, "list-card", "card")}
            />
          ))}
        </ListCard>
      </ContainerListCard>
    </>
  );
};

export default CarouselCard;
