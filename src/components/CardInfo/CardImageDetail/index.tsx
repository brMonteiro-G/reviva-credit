import * as SC from "./styles";

interface CardImageDetailProps {
  urlImage: string;
  nameCardUser: string;
  numberCard: string;
}

const CardImageDetail = ( { urlImage, nameCardUser, numberCard }: CardImageDetailProps) => {
  return (
    <SC.ContainerInfoMain>
      <SC.Card urlImage={urlImage} />
      <SC.ContainerNameAndNumber>
        <h2>{nameCardUser}</h2>
        <p>{numberCard}</p>
      </SC.ContainerNameAndNumber>
    </SC.ContainerInfoMain>
  );
};

export default CardImageDetail;
