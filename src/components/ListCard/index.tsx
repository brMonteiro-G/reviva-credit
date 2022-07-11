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
          onClick={onClick}
          onScroll={() => {
            updateFocusState("section", setFocusedCard, 1);
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
              onClick={() => moveScrollOnClick(focusedCard, index)}
            />
          ))}
        </ListCard>
      </ContainerListCard>
    </>
  );
};

export default CarouselCard;
