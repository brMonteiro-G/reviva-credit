import Footer from "@/components/Footer";
import { CardsProvider } from "@/contexts/CardsContext";
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
            <Routes>
              <Route path="/" element={<Home/>}>
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
