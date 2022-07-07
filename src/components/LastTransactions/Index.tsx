import {
  Container,
  Content,
  DivShowAll,
  PaymentDescription,
  PaymentValue,
  Slash,
  Title,
} from '@/components/LastTransactions/Styles';
import { getTransactions } from '@/services/getTransactions';

export default function LastTransactions() {
  const alguma = getTransactions();
  console.log(alguma);

  return (
    <>
      <Container>
        <Title>
          <p>Últimas</p>
          <p>movimentações</p>
        </Title>
        <Content>
          <PaymentDescription>
            <p>10/05</p>
            <p>lorem ipsum</p>
          </PaymentDescription>
          <Slash />

          <PaymentValue>
            <p>Pagamento</p>
            <p>- 150,00</p>
          </PaymentValue>
        </Content>
        <DivShowAll>
          <a href='/'>
            <u>Ver mais</u>
          </a>
        </DivShowAll>
      </Container>
    </>
  );
}
