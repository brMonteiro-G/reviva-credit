import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardFocusProvider } from "./contexts/CardInFocus";
import { CardsProvider } from "./contexts/CardsContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { UsersProvider } from "./contexts/UsersContext";
import Details from "./pages/details";
import Home from "./pages/home";
import Main from "./templates/Main";

export default function AppRouter() {
  return (
    <Router>
      <UsersProvider>
        <CardsProvider>
          <CardFocusProvider>
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
          </CardFocusProvider>
        </CardsProvider>
      </UsersProvider>
    </Router>
  );
}
