import { theme } from "@/styles/ThemeProvider";
import * as SC from "./styles";

interface CardImageDetailProps {
  nameCardUser: string;
  numberCard: string;
  brand: string;
}

const CardImageDetail = ({
  brand,
  nameCardUser,
  numberCard,
}: CardImageDetailProps) => {
  let color = theme.colors.primary_color;

  if (brand === "visa") {
    color = theme.colors.tertiary_color;
  }

  return (
    <SC.ContainerInfoMain>
      <SC.Card color={color} urlImage={`/images/${brand}.svg`} />
      <SC.ContainerNameAndNumber>
        <h2>{nameCardUser}</h2>
        <p>{numberCard}</p>
      </SC.ContainerNameAndNumber>
    </SC.ContainerInfoMain>
  );
};

export default CardImageDetail;
