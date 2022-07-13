import CardInfo from "@/components/CardInfo";
import Header from "@/components/Header/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import Loading from "@/components/Loading";
import MonthBar from "@/components/MonthBar";
import { useCardInFocus } from "@/contexts/CardInFocus";
import { useCard } from "@/contexts/CardsContext";
import { useTransactions } from "@/contexts/TransactionsContext";
import { useState } from "react";

const Details = () => {
  const { cardFocus } = useCardInFocus();
  const { userCard } = useCard();
  const { transactionsByCard, orderInvoiceByMonth } = useTransactions();

  const [focusedMonth, setFocusedMonth] = useState(0);
  const currentMonth = orderInvoiceByMonth(focusedMonth);

  if (!userCard) {
    return <Loading />;
  }
  
  const status = "Pago"

  return (
    <>
      <Header underline={"movimentações"} regards={"Minhas"} />
      <CardInfo status={status} user={userCard} card={cardFocus} month={focusedMonth}  />
      <MonthBar
        status={status}
        setFocusedMonth={setFocusedMonth}
        focusedMonth={focusedMonth}
      />
      <LastTransactions page={"second"} transactions={currentMonth} />
    </>
  );
};

export default Details;
