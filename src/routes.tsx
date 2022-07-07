import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="" element={""}>
          <Route index element={""} />
          <Route path="" element={""} />
          <Route path="" element={""} />
        </Route>
        <Route path="*" element={""} />
      </Routes>
      <Footer />
    </Router>
  );
}
