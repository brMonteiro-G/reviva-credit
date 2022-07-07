import { Container } from "./styles";

interface InfoProps {
  title: string;
  value: string;
  position: string;
}

const InfoCredit = ({ title, value, position }: InfoProps) => {
  return (
    <Container position={position}>
      <h3>{title}</h3>
      <p>{value}</p>
    </Container>
  );
};

export default InfoCredit;
