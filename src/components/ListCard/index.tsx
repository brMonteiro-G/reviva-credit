import { useEffect, useState } from "react";
import Card from "./Card";
import { ClickLeft, ClickRight } from "./CardSideButtons";
import { ContainerListCard, ListCard } from "./style";

interface ListCardProps {
  onClick?: () => void;
}

const CarouselCard = ({ onClick }: ListCardProps) => {
  const [focusedCard, setFocusedCard] = useState(0);

  const updateFocusState = () => {
    document.querySelectorAll("section").forEach((card, index) => {
      if (card.getBoundingClientRect().left < window.innerWidth / 2) {
        setFocusedCard(index - 1);
      }
    });
  };

  const moveScrollOnClick = (position: number) => {
    document.querySelector("section")?.scrollBy({
      left: position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(focusedCard);
  }, [focusedCard]);

  return (
    <>
      <ContainerListCard>
        <ListCard
          onClick={onClick}
          onScroll={() => {
            updateFocusState();
          }}
        >
          <Card
            name="Renato Neto"
            brand="visa"
            cvv="002"
            dueDate={1}
            number={"1234 4567 9874 6545"}
          />
          <Card
            name="Renato Neto"
            brand="mastercard"
            cvv="002"
            dueDate={20}
            number={"1234 4567 9874 6545"}
          />
          <Card
            name="Renato Neto"
            brand="visa"
            cvv="002"
            dueDate={5}
            number={"1234 4567 9874 6545"}
          />
        </ListCard>
        <ClickLeft onClick={() => moveScrollOnClick(300)} />
        <ClickRight onClick={() => moveScrollOnClick(-300)} />
      </ContainerListCard>
    </>
  );
};

export default CarouselCard;
