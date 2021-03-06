import { theme } from "@/styles/ThemeProvider";
import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { monthList } from "./monthList";
import { getCurrentMonth } from "../../functions";
import {
  MonthItem,
  PointerTriangle,
  WrapperMonthBar,
  WrapperMonthItem,
} from "./style";

interface MonthBarProps {
  status: "Pago" | "Aberta" | "Fechada";
  focusedMonth: number;
  setFocusedMonth: Dispatch<SetStateAction<number>>;
}

export const updateFocusState = (
  tagId: string,
  setState: Dispatch<SetStateAction<number>>
) => {
  document.querySelectorAll(`#${tagId}`).forEach((card, index) => {
    if (card.getBoundingClientRect().left < window.innerWidth / 2) {
      setState(index);
    }
  });
};

export const moveScrollOnClick = (
  focusedCard: number,
  index: number,
  idTagFather: string,
  typeOfUse: "card" | "month"
) => {
  const distanceFromScroll = typeOfUse === "card" ? 300 : 80;
  const currentItems = document.querySelector(`#${idTagFather}`);
  const difference = index - focusedCard;
  if (index - difference === focusedCard) {
    currentItems?.scrollBy({
      left: +(difference * distanceFromScroll),
      behavior: "smooth",
    });
  }
};

const MonthBar = ({ status, focusedMonth, setFocusedMonth }: MonthBarProps) => {
  let currentColorStatus: string;
  switch (status) {
    case "Pago":
      currentColorStatus = theme.colors.gray_color;
      break;
    case "Aberta":
      currentColorStatus = theme.colors.tertiary_color;
      break;
    case "Fechada":
      currentColorStatus = theme.colors.quintenary_color;
      break;
  }

  useEffect(() => {
    moveScrollOnClick(
      focusedMonth,
      getCurrentMonth() + 1,
      "wrapper-month-item",
      "month"
    );
  }, []);

  return (
    <WrapperMonthBar>
      <WrapperMonthItem
        backgroundColor={currentColorStatus}
        id="wrapper-month-item"
        onScroll={() => {
          updateFocusState("month", setFocusedMonth);
        }}
      >
        {monthList.map((month, index) => (
          <MonthItem
            onClick={() => {
              moveScrollOnClick(
                focusedMonth,
                index,
                "wrapper-month-item",
                "month"
              );
            }}
            id={"month"}
            title={month}
            key={index}
            focused={index === focusedMonth}
          >
            {month}
          </MonthItem>
        ))}
      </WrapperMonthItem>
      <PointerTriangle backgroundColor={currentColorStatus} />
    </WrapperMonthBar>
  );
};

export default MonthBar;
