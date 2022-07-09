import * as SC from "./styles";

interface CardInfoDetailProps {
  label: "Total" | "Vencimento" | "Status";
  value: string;
}

const CardInfoDetail = ({ label, value }: CardInfoDetailProps) => {
  return (
    <SC.InfoDetail>
      <h3>{label}:</h3>
      <p>{value}</p>
    </SC.InfoDetail>
  );
};

export default CardInfoDetail;
