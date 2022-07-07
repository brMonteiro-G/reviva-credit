import { theme } from "styles/ThemeProvider";
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
  brand: "visa" | "mastercard";
  number: string;
  cvv: string;
  dueDate: number;
}

const Card = ({ name, brand, number, cvv, dueDate }: CardProps) => {
  let color = theme.colors.primary_color;

  if (brand === "visa") {
    color = theme.colors.tertiary_color;
  }

  return (
    <WrapperCard color={color}>
      <TitleCard>Reviva Credit</TitleCard>
      <NameClientCard>{name}</NameClientCard>
      <NumberCard>{number}</NumberCard>
      <WrapperCardDetails>
        <DateCard>{dueDate.toString().padStart(2, "0")}/05/26</DateCard>
        <CvvCard>{cvv}</CvvCard>
      </WrapperCardDetails>
      <FlagCard src={`/images/${brand}.svg`} alt="bandeira master card" />
    </WrapperCard>
  );
};

export default Card;
