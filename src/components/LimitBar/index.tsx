import { useCardInFocus } from "@/contexts/CardInFocus";
import { useTransactions } from "@/contexts/TransactionsContext";
import { formactPrice } from "@/functions";
import { useEffect, useState } from "react";
import Bar from "./Bar";
import InfoCredit from "./InfoCredit";
import * as SC from "./styles";

const LimitBar = () => {
  const [limit, setLimit] = useState<number>(0);

  const { cardFocus } = useCardInFocus();
  const { calculateTotal } = useTransactions();

  const calculatePercent = (limitValue: number, usedValue: number) => {
    const result = (usedValue * 100) / limitValue;
    return result.toFixed(2);
  };

  useEffect(() => {
    setLimit(cardFocus?.limit);
    calculatePercent(limit, calculateTotal());
  }, [cardFocus]);

  const virifyPercent =
    parseInt(calculatePercent(limit, calculateTotal())) > 100
      ? 100
      : parseInt(calculatePercent(limit, calculateTotal()));

  return (
    <SC.StyledProgressBar>
      <SC.Title>
        Seu <strong>Limite</strong>
      </SC.Title>
      <Bar widthBar={virifyPercent} />
      <SC.ContainerInfoCredit>
        <InfoCredit
          position="left"
          title={"Utilizado"}
          value={formactPrice(calculateTotal())}
          warning={false}
        />
        <InfoCredit
          position="right"
          title={"Disponível"}
          value={formactPrice(limit)}
          warning={false}
        />
      </SC.ContainerInfoCredit>
    </SC.StyledProgressBar>
  );
};

export default LimitBar;
