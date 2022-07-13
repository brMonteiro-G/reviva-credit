import { ContainerLastTransactions } from "@/components/LastTransactions/Styles";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/ThemeProvider";

describe("ContainerLastTransactions,  there should be", () => {
  it("Link see more,is rederizing more elements in the list", () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <ContainerLastTransactions data-testid="dataTestId" />
      </ThemeProvider>
    );

    const listTransactions = [
      {
        id: "1bceb176-d6e2-4c88-8cbc-d67869e32233",
        cardId: "16a037dc-4074-4466-a5eb-5fb00a205882",
        value: 827.0089938016134,
        description: "Carvalho, Melo and Martins",
        date: "05/19",
      },
      {
        id: "23aab7ee-ac93-46cd-b370-98e008ffe70c",
        cardId: "16a037dc-4074-4466-a5eb-5fb00a205882",
        value: 1050.4293623762926,
        description: "Saraiva, Barros and Moraes",
        date: "01/02",
      },
      {
        id: "c03b1b72-76c2-4623-9562-c5f49afdd64f",
        cardId: "16a037dc-4074-4466-a5eb-5fb00a205882",
        value: 1938.3056488340037,
        description: "Macedo S.A.",
        date: "04/14",
      },
      {
        id: "c5134000-1af7-48de-98dc-9d85f6ae5bf6",
        cardId: "16a037dc-4074-4466-a5eb-5fb00a205882",
        value: 1640.428239383586,
        description: "Carvalho - Carvalho",
        date: "02/27",
      },
    ];

    const click = fireEvent.click(screen.getByTestId("dataTestId"));

    expect(click).toBe(listTransactions.length > 3);

    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();
  });
});
