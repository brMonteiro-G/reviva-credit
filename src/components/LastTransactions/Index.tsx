import {
  ContainerLastTransactions,
  Content,
  DivShowAll,
  PaymentDescription,
  PaymentValue,
  Slash,
  Title,
} from "@/components/LastTransactions/Styles";
import { getTransactions } from "@/services/getTransactions";
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
  const alguma = getTransactions();
  console.log(alguma);

  return (
    <>
      <ContainerLastTransactions itemProp={page}>
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
      </ContainerLastTransactions>
    </>
  );
}
