import {
  Container,
  Content,
  DivShowAll,
  PaymentDescription,
  PaymentValue,
  Slash,
  Title,

} from "@/components/LastTransactions/Styles";
import { serviceTransactions } from "@/services/ServiceTransactions";
import { ITransaction } from "@/types/ITransaction";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listLastTransactions } from "./listLastTransactions";

interface TransactionsProps {
  page: "first" | "second";
  transactionsDisplayed?: number;
}

export default function LastTransactions({
  transactionsDisplayed,
  page,
}: TransactionsProps) {
 


  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(()=>{
    serviceTransactions(setTransactions)
  },[])
  return (

    <>
      <Container itemProp={page}>
        <>
          {page === "first" ? (
            <Title>
              <p>Últimas</p>
              <p>movimentações</p>
            </Title>
          ) : (
            <></>
          )}
          {listLastTransactions.slice(0, transactionsDisplayed).map((transactions) => (
            <Content key={transactions.id}>
              <PaymentDescription>
                <p>{transactions.date}</p>
                <p>{transactions.description}</p>
              </PaymentDescription>
              <Slash />
              <PaymentValue>
                <p>Pagamento</p>
                <p>- {transactions.value.toFixed(2).replace(".", ",")}</p>
              </PaymentValue>
            </Content>
          ))}
          {page === "first" ? (
            <DivShowAll>
              <Link to="/details">VER MAIS</Link>
            </DivShowAll>
          ) : (
            <></>
          )}
        </>
      </Container>
    </>
  );
}
