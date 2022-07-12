import CardInfo from "@/components/CardInfo";
import Extract from "@/components/Extract/Index";
import Header from "@/components/Header/Index";
import MonthBar from "@/components/MonthBar";
import { ICard } from "@/types/ICard";

const Details = () => {
  return (
    <>
       <Header
        title={"Bem vindo ao "}
        subtitle={"Reviva Credit"}
        regards={"Olá, "}
        user={"Renato!"}
      />
      <CardInfo card={{} as ICard} />
      <MonthBar status={"aberta"} />
      <Extract />
    </>
  );
};

export default Details;
