import { useCard } from "@/contexts/CardsContext";
import { Users } from "@/contexts/mockData";
import { formactPrice } from "@/functions";
import { useEffect } from "react";
import Bar from "./Bar";
import InfoCredit from "./InfoCredit";
import * as SC from "./styles";

const LimitBar = () => {
  const limite = 3000;
  const utilizado = 1599.9;

  const calculatePercent = (): string => {
    const result = (utilizado * 100) / limite;
    return result.toFixed(2);
  };

  const { cards, cardsByUser } = useCard();

  const testeCart = cardsByUser(Users[0]);

  console.log('limitBar', testeCart)

  useEffect(() => {
    calculatePercent();
  }, [limite, utilizado]);

  return (
    <SC.StyledProgressBar>
      <SC.Title>
        Seu <strong>Limite</strong>
      </SC.Title>
      <Bar widthBar={Number(calculatePercent())} />
      <SC.ContainerInfoCredit>
        <InfoCredit
          position="left"
          title={"Utilizado"}
          value={formactPrice(utilizado)}
        />
        <InfoCredit
          position="right"
          title={"Disponível"}
          value={formactPrice(limite)}
        />
      </SC.ContainerInfoCredit>
    </SC.StyledProgressBar>
  );
};

export default LimitBar;
