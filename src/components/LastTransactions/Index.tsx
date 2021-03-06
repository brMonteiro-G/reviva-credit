import {
  ContainerLastTransactions,
  Content,
  DivShowAll,
  NoTransactions,
  PaymentDescription,
  PaymentValue,
  Slash,
  Title,
} from "@/components/LastTransactions/Styles";
import { useTransactions } from "@/contexts/TransactionsContext";
import { formatDate } from "@/functions";
import { ITransaction } from "@/types/ITransaction";
import { Link } from "react-router-dom";

interface TransactionsProps {
  page: "first" | "second";
  transactionsDisplayed?: number;
  transactions: ITransaction[];
}
export default function LastTransactions({
  transactionsDisplayed, 
  page,
  transactions,
}: TransactionsProps) {
  return (
    <>
      <ContainerLastTransactions itemProp={page} data-testid="dataTestId">
        <>
          {page === "first" && (
            <Title>
              <p>Últimas</p>
              <p>movimentações</p>
            </Title>
          )}

          {transactions.length <= 0 ? (
            <NoTransactions>VOCÊ NÃO GASTOU ESSE MÊS &#128515;</NoTransactions>
          ) : (
            transactions.slice(0, transactionsDisplayed).map((transactions) => (
              <Content itemProp={page} key={transactions.id}>
                <PaymentDescription>
                  <p>{formatDate(transactions.date)}</p>
                  <p>{transactions.description}</p>
                </PaymentDescription>
                <Slash />
                <PaymentValue>
                  <p>Pagamento</p>
                  <p>- {transactions.value.toFixed(2).replace(".", ",")}</p>
                </PaymentValue>
              </Content>
            ))
          )}
          {/* {} */}
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
