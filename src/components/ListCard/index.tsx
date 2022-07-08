import { useEffect, useState } from "react";
import { moveScrollOnClick, updateFocusState } from "../MonthBar";
import Card from "./Card";
import { listCard } from "./listCard";
import { ContainerListCard, ListCard } from "./style";

interface ListCardProps {
  onClick?: () => void;
}

const CarouselCard = ({ onClick }: ListCardProps) => {
  const [focusedCard, setFocusedCard] = useState(0);

  useEffect(() => {
    console.log(focusedCard);
  }, [focusedCard]);

  return (
    <>
      <ContainerListCard>
        <ListCard
          onClick={onClick}
          onScroll={() => {
            updateFocusState("section", setFocusedCard, 1);
          }}
        >
          {listCard.map((card, index) => (
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
