import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/ThemeProvider";

import App from "./App";
import Card from "@/components/ListCard/Card";
import CarouselCard from "@/components/ListCard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
      <CarouselCard/>
      {/*<App />*/}
    </ThemeProvider>
  </React.StrictMode>
);
