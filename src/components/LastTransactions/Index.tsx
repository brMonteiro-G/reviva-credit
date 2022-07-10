import {
  Container,
  Content,
  DivShowAll,
  PaymentDescription,
  PaymentValue,
  Slash,
  Title,
} from '@/components/LastTransactions/Styles';
import { serviceTransactions } from '@/services/ServiceTransactions';
import { ITransaction } from '@/types/ITransaction';
import { useEffect, useState } from 'react';

interface TransactionsProps {
  page: 'first' | 'second'
  transactionsDisplayed: number;
}
export default function LastTransactions({ transactionsDisplayed, page }: TransactionsProps) {


  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(()=>{
    serviceTransactions(setTransactions)
  },[])
  return (

    <Container
      itemProp={page}
    >
      {page === 'first' ? <Title>
        <p>Últimas</p>
        <p>movimentações</p>
      </Title> : <></>}
      {transactions.slice(0, transactionsDisplayed).map(transaction => {
        return (
          <Content
            key={transaction.id}>
            <>
              <PaymentDescription
              >
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
              </PaymentDescription>
              <Slash />

              <PaymentValue>
                <p>Pagamento</p>
                <p>-R${transaction.value.toFixed(2)}</p>
              </PaymentValue>
            </>

          </Content>
        )
      })}
      {page === 'first' ? <DivShowAll>
        <a href='/'>
          <u>Ver mais</u>
        </a>
      </DivShowAll> : <></>}
    </Container>

  );
}
