import CardInfo from "@/components/CardInfo";
import { Cards } from "@/contexts/mockData";
import { Outlet } from "react-router-dom";
import Main from "./Main";
export default function PageDefault() {
  return (
    <>
      <Main>
        <CardInfo card={Cards[0]} />
        <Outlet />
      </Main>
    </>
  );
}
