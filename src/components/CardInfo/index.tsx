import CardImageDetail from "./CardImageDetail";
import CardInfoDetail from "./CardInfoDetail";
import * as SC from "./styles";

const CardInfo = () => {
  return (
    <SC.SectionCard>
      <CardImageDetail
        urlImage={"/images/mastercard.svg"}
        nameCardUser={"Renato Neto"}
        numberCard={"5233 3493 4772 7801"}
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
