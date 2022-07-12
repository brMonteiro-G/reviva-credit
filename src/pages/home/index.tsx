import Header from "@/components/Header/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import LimitBar from "@/components/LimitBar";
import CarouselCard from "@/components/ListCard";
import { useCard } from "@/contexts/CardsContext";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { cards, userCard } = useCard();

  console.log('Home', cards);
  return (
    <>
      <Header
        title={"Bem vindo ao "}
        subtitle={"Reviva Credit"}
        regards={"Olá, "}
        user={userCard.name}
      />
      <CarouselCard />
      <LimitBar />
      <LastTransactions page={"first"} transactionsDisplayed={3} />
      <Outlet />
    </>
  );
};

export default Home;
