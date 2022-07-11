import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { CardsProvider } from "./contexts/cardsContext";
import { TransactionsProvider } from "./contexts/transactionsContext";
import { UsersProvider } from "./contexts/usersContext";
import PageDefault from "./templates";

export default function AppRouter() {
  return (
    <Router>
      <UsersProvider>
        <CardsProvider>
          <TransactionsProvider>
            <Routes>
              <Route path="/" element={<PageDefault />}>
                <Route path="/wallet" element={""} />
                <Route path="/details" element={""} />
                <Route path="/settings" element={""} />
              </Route>
              <Route path="*" element={""} />
            </Routes>
          </TransactionsProvider>
        </CardsProvider>
      </UsersProvider>
      <Footer />
    </Router>
  );
}
