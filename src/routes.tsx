import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import PageDefault from "./templates";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={""} />
          <Route path="/wallet" element={""} />
          <Route path="/details" element={""} />
          <Route path="/settings" element={""} />
        </Route>
        <Route path="*" element={""} />
      </Routes>
      <Footer />
    </Router>
  );
}
