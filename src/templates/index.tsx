import { Outlet } from "react-router-dom";
import Main from "./Main";
export default function PageDefault() {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
