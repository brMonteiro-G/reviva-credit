import { useCard } from "@/contexts/CardsContext";
import { ICard } from "@/types/ICard";
import CardImageDetail from "./CardImageDetail";
import CardInfoDetail from "./CardInfoDetail";
import * as SC from "./styles";

interface CardInfoProps {
  card: ICard;
}

const CardInfo = ({ card }: CardInfoProps) => {

  const { userCard } = useCard()

  return (
    <SC.SectionCard>
      <CardImageDetail
        urlImage={"/images/mastercard.svg"}
        nameCardUser={userCard.name}
        numberCard={card.number}
      />
      <SC.DivSeparator>
        <div>
          <CardInfoDetail label={"Total"} value={"R$ 3000"} />
          <CardInfoDetail label={"Vencimento"} value={"08/01"} />
        </div>
        <CardInfoDetail label={"Status"} value={"Pago"} />
      </SC.DivSeparator>
    </SC.SectionCard>
  );
};

export default CardInfo;
