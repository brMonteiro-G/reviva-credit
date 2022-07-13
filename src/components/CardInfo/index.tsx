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
  amount: number;
}

const CardInfo = ({ card, user, month, status, amount }: CardInfoProps) => {
  const monthFormatted = (month + 1).toString().padStart(2, "0");
  return (
    <SC.SectionCard>
      <CardImageDetail
        brand={card.brand}
        nameCardUser={user.name}
        numberCard={card.number}
      />
      <SC.DivSeparator>
        <div>
          <CardInfoDetail
            label={"Total"}
            value={formactPrice(amount)}
          />
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
