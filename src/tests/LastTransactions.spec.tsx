import { theme } from "@/styles/ThemeProvider";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import LastTransactions from "@/components/LastTransactions/Index";
import { ITransaction } from "@/types/ITransaction";
import { BrowserRouter as Router } from "react-router-dom";


const axios = require("axios");

jest.mock("axios");

describe("Component <LastTransactions/>", () => {
  beforeEach(async () => {
    await axios.get.mockResolvedValue([
      {
        id: "1bceb176-d6e2-4c88-8cbc-d67869e32233",
        cardId: "16a037dc-4074-4466-a5eb-5fb00a205882",
        value: 827.0089938016134,
        description: "Carvalho, Melo and Martins",
        date: "2022-05-19T05:22:35.380Z",
      },
      {
        id: "23aab7ee-ac93-46cd-b370-98e008ffe70c",
        cardId: "16a037dc-4074-4466-a5eb-5fb00a205882",
        value: 1050.4293623762926,
        description: "Saraiva, Barros and Moraes",
        date: "2022-01-02T23:36:01.353Z",
      },
    ]);
  });

  it("should render data from api", async () => {
    const response:ITransaction[] = Array.from(await axios.get()) 
    render(
      <ThemeProvider theme={theme}>
        <Router>

        <LastTransactions page={"first"} transactions={response} />
        </Router>
      </ThemeProvider>
    );
    
    const divElements = screen.queryAllByRole("transactions");
    divElements.some(() => {
      expect(divElements).toHaveTextContent("Carvalho");
    });
  });
 
});
