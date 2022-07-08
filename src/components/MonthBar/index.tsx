import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { monthList } from "./monthList";
import {
  MonthItem,
  PointerTriangle,
  WrapperMonthBar,
  WrapperMonthItem,
} from "./style";

export const updateFocusState = (
  tagChild: string,
  setState: Dispatch<SetStateAction<number>>,
  decrement: number
) => {
  document.querySelectorAll(tagChild).forEach((card, index) => {
    if (card.getBoundingClientRect().left < window.innerWidth / 2) {
      setState(index - (decrement || 0));
    }
  });
};

export const moveScrollOnClick = (focusedCard: number, index: number) => {
  const currentItems = document.querySelector("section");
  const difference = index - focusedCard;

  if (index - difference === focusedCard) {
    currentItems?.scrollBy({
      left: +(difference * 90),
      behavior: "smooth",
    });
  }
};

const MonthBar = () => {
  const [focusedCard, setFocusedCard] = useState(0);
  
  useEffect(() => {
    console.log(focusedCard + 1);
  }, [focusedCard]);

  return (
    <WrapperMonthBar>
      <WrapperMonthItem
        onScroll={() => {
          updateFocusState("p", setFocusedCard, 0);
        }}
      >
        {monthList.map((month, index) => (
          <MonthItem
            onClick={() => moveScrollOnClick(focusedCard, index)}
            title={month}
            key={index}
            focused={index === focusedCard}
          >
            {month}
          </MonthItem>
        ))}
      </WrapperMonthItem>
      <PointerTriangle />
    </WrapperMonthBar>
  );
};

export default MonthBar;
