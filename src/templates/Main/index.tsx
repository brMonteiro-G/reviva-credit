import Footer from "@/components/Footer";
import { ContainerMain } from "./styles";

type PropsMain = {
  children: React.ReactNode;
};
export default function Main(props: PropsMain) {
  return (
    <ContainerMain>
      {props.children}
      <Footer />
    </ContainerMain>
  );
}
