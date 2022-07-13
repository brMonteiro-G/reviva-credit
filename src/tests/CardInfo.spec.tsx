import { theme } from "@/styles/ThemeProvider";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { debug } from "console";
import LastTransactions from "@/components/LastTransactions/Index";
import { ITransaction } from "@/types/ITransaction";
import { BrowserRouter as Router } from "react-router-dom";
import CardInfo from "@/components/CardInfo";
import { IUser } from "@/types/IUser";
import { ICard } from "@/types/ICard";
import CardImageDetail from "@/components/CardInfo/CardImageDetail";

const axios = require("axios");

jest.mock("axios");

describe("Component <LastTransactions/>", () => {
  beforeEach(async () => {
    await axios.get.mockResolvedValue({
      userId: "9364ca9a-a941-46e3-abae-e8f3870ebc5f",
      id: "16a037dc-4074-4466-a5eb-5fb00a205882",
      brand: "visa",
      number: "4283920481068830",
      cvv: "450",
      limit: 3998,
      dueDate: 14,
      expiresIn: "2028-01-21T03:09:11.811Z",
    });
  });

  it("should render the card number from api", async () => {
    const user:IUser={
        id: "1",
        name: "Wanderson"
    }; 
    const response: ICard = await axios.get();
    render(
      <ThemeProvider theme={theme}>
        <CardImageDetail nameCardUser={response.userId} numberCard={response.number} brand={response.brand}/>
      </ThemeProvider>
    );

    const divElement = screen.queryByRole("cardContent");
    expect(divElement).toHaveTextContent(response.number)


  });
  it("should render the card user from api", async () => {
    const user:IUser={
        id: "1",
        name: "Wanderson"
    }; 
    const response: ICard = await axios.get();
    render(
      <ThemeProvider theme={theme}>
        <CardImageDetail nameCardUser={response.userId} numberCard={response.number} brand={response.brand}/>
      </ThemeProvider>
    );

    const divElement = screen.queryByRole("cardContent");
    expect(divElement).toHaveTextContent(response.userId)


  });
});
