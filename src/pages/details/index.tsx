import CardInfo from "@/components/CardInfo";
import Extract from "@/components/Extract/Index";
import Header from "@/components/Header/Index";
import MonthBar from "@/components/MonthBar";
import { Cards } from "@/contexts/mockData";

const Details = () => {
  return (
    <>
       <Header
        title={"Bem vindo ao "}
        subtitle={"Reviva Credit"}
        regards={"Olá, "}
        user={"Renato!"}
      />
      <CardInfo card={Cards[0]} />
      <MonthBar status={"aberta"} />
      <Extract />
    </>
  );
};

export default Details;
