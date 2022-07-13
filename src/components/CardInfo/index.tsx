import { useTransactions } from "@/contexts/TransactionsContext";
import { formactPrice } from "@/functions";
import { ICard } from "@/types/ICard";
import { IUser } from "@/types/IUser";
import CardImageDetail from "./CardImageDetail";
import CardInfoDetail from "./CardInfoDetail";
import * as SC from "./styles";

interface CardInfoProps {
  card: ICard;
  user: IUser;
  month: number;
  status: "Pago" | "Aberta" | "Fechada";
}

const CardInfo = ({ card, user, month, status }: CardInfoProps) => {
  const monthFormatted = (month + 1).toString().padStart(2, "0");
  const { calculateTotal } = useTransactions();
  return (
    <SC.SectionCard> 
      <CardImageDetail 
        brand={card.brand}
        nameCardUser={user.name}
        numberCard={card.number}
      />
      <SC.DivSeparator>
        <div>
          <CardInfoDetail label={"Total"} value={formactPrice(calculateTotal())} />
          <CardInfoDetail
            label={"Vencimento"}
            value={`${card.dueDate}/${monthFormatted}`}
          />
        </div>
        <CardInfoDetail label={"Status"} value={status} />
      </SC.DivSeparator>
    </SC.SectionCard>
  );
};

export default CardInfo;
