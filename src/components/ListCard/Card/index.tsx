import { formatDate } from "@/functions";
import { theme } from "@/styles/ThemeProvider";
import {
  CvvCard,
  DateCard,
  FlagCard,
  NameClientCard,
  NumberCard,
  TitleCard,
  WrapperCard,
  WrapperCardDetails,
} from "./style";

interface CardProps {
  name: string;
  brand: string;
  number: string;
  cvv: string;
  expiresIn: string;
  onClick?: () => void;
}

const Card = ({ name, brand, number, cvv, expiresIn, onClick }: CardProps) => {
  let color = theme.colors.primary_color;

  if (brand === "visa") {
    color = theme.colors.tertiary_color;
  }

  return (
    <WrapperCard id="card" color={color} onClick={onClick}>
      <TitleCard>Reviva Credit</TitleCard>
      <NameClientCard>{name}</NameClientCard>
      <NumberCard>{number}</NumberCard>
      <WrapperCardDetails>
        <DateCard>{formatDate(expiresIn, true)}</DateCard>
        <CvvCard>{cvv}</CvvCard>
      </WrapperCardDetails>
      <FlagCard src={`/images/${brand}.svg`} alt={`cartão ${brand}`} />
    </WrapperCard>
  );
};

export default Card;
