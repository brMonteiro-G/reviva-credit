import CardInfo from "@/components/CardInfo";
import Header from "@/components/Header/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import Loading from "@/components/Loading";
import MonthBar from "@/components/MonthBar";
import { useCardInFocus } from "@/contexts/CardInFocus";
import { useCard } from "@/contexts/CardsContext";
import { useTransactions } from "@/contexts/TransactionsContext";
import { getFullAmountMonthly } from "@/functions";
import { ICard } from "@/types/ICard";
import { useState } from "react";

const Details = () => {
  const { cardFocus } = useCardInFocus();
  const { userCard } = useCard();
  const { orderInvoiceByMonth } = useTransactions();

  const [focusedMonth, setFocusedMonth] = useState(0);
  const currentMonth = orderInvoiceByMonth(focusedMonth);

  if (!userCard) {
    return <Loading />;
  }

  const status = "Pago";

  const checkDateExpiration = (cardFocused: ICard, MonthFocused: number) => {
    const dateFocused = new Date(2022, MonthFocused, cardFocused.dueDate);
    const currentDueDates = new Date(2022, new Date().getMonth(), cardFocused.dueDate);
 
    const dateNow = new Date();

    const deadlineClosed = new Date(2022, new Date().getMonth(), cardFocused.dueDate);
    deadlineClosed.setDate(deadlineClosed.getDate() - 10);

    if ( dateFocused < deadlineClosed ) {
      return "Pago";
    }
    if (dateNow >= deadlineClosed) {
      if (currentDueDates < dateFocused) {
        return "Aberta";
      }else{
        return "Fechada";
      }
    }
    return "Pago"
  };
  return (
    <>
      <Header underline={"movimentações"} regards={"Minhas"} />
      <CardInfo
        amount={getFullAmountMonthly(currentMonth)}
        status={checkDateExpiration(cardFocus, focusedMonth)}
        user={userCard}
        card={cardFocus}
        month={focusedMonth}
      />
      <MonthBar
        status={checkDateExpiration(cardFocus, focusedMonth)}
        setFocusedMonth={setFocusedMonth}
        focusedMonth={focusedMonth}
      />
      <LastTransactions page={"second"} transactions={currentMonth} />
    </>
  );
};

export default Details;
