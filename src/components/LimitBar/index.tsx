import { formactPrice } from "functions";
import InfoCredit from "./InfoCredit";
import * as SC from "./styles";

const LimitBar = () => {
  const limite = 3000;
  const utilizado = 999.90;

  const calculatePercent = (): string => {
    const result = (utilizado * 100) / limite;
    return result.toFixed(2);
  };

  return (
    <SC.StyledProgressBar>
      <SC.Title>
        Seu <strong>Limite</strong>
      </SC.Title>
      <SC.LimitCartAvailable>
        <SC.LimitCartUsed width={Number(calculatePercent())} />
      </SC.LimitCartAvailable>
      <SC.ContainerInfoCredit>
        {utilizado < limite ? (
          <>
            <InfoCredit title={"Utilizado"} value={formactPrice(utilizado)} />
            <InfoCredit title={"Disponível"} value={formactPrice(limite)} />
          </>
        ) : (
          <div>Limite esgotado</div>
        )}
      </SC.ContainerInfoCredit>
    </SC.StyledProgressBar>
  );
};

export default LimitBar;
