import Header from "@/components/Header/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import LimitBar from "@/components/LimitBar";
import CarouselCard from "@/components/ListCard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header
        title={"Bem vindo ao "}
        subtitle={"Reviva Credit"}
        regards={"Olá, "}
        user={"Renato!"}
      />
      <CarouselCard />
      <LimitBar />
      <LastTransactions page={"first"} transactionsDisplayed={3} />
      <Outlet />
    </>
  );
};

export default Home;
