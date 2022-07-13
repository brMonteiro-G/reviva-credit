import Header from "@/components/Header/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import LimitBar from "@/components/LimitBar";
import CarouselCard from "@/components/ListCard";
import Loading from "@/components/Loading";
import { useCard } from "@/contexts/CardsContext";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { userCard } = useCard();

  if (!userCard) {
    return <Loading />;
  }

  return (
    <>
      <Header
        title={"Bem vindo ao "}
        subtitle={`Reviva Credit`}
        regards={"Olá, "}
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
