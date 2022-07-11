import Footer from "@/components/Footer";
import { CardsProvider } from "@/contexts/cardsContext";
import { TransactionsProvider } from "@/contexts/transactionsContext";
import { UsersProvider } from "@/contexts/usersContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import Main from "./templates/Main";

export default function AppRouter() {
  return (
    <Router>
      <UsersProvider>
        <CardsProvider>
          <TransactionsProvider>
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wallet" element={"Wallet"} />
                <Route path="/settings" element={"Settings"} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={"404"} />
              </Routes>
            </Main>
          </TransactionsProvider>
        </CardsProvider>
      </UsersProvider>
    </Router>
  );
}
