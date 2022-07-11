import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/ThemeProvider";

import App from "./App";
import Extract from "@/components/Extract/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import Header from "@/components/Header/Index";
import ListCard from "@/components/ListCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
      <App/>

    </ThemeProvider>
  </React.StrictMode>
);
