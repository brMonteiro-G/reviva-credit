import { useCard } from "@/contexts/CardsContext";
import { formactPrice } from "@/functions";
import { useEffect } from "react";
import Loading from "../Loading";
import Bar from "./Bar";
import InfoCredit from "./InfoCredit";
import * as SC from "./styles";

const LimitBar = () => {

  // const { cards } = useCard();

  // const 

  // const card = cards[0];

  // if(!cards) {
  //   return <Loading />
  // }

  const limite =  2000;
  const utilizado = 100;

  const calculatePercent = (): string => {
    const result = (utilizado * 100) / limite;
    return result.toFixed(2);
  };

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
