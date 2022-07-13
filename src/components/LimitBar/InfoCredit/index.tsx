import { Container } from "./styles";

interface InfoProps {
  title: string;
  value: string;
  position: string;
  warning: boolean
}

const InfoCredit = ({ title, value, position, warning = false }: InfoProps) => {
  return (
    <Container warning={warning} position={position}>
      <h3>{title}</h3>
      <p>{value}</p>
    </Container>
  );
};

export default InfoCredit;
