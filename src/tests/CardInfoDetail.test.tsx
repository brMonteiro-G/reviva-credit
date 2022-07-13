import CardInfoDetail from "@/components/CardInfo/CardInfoDetail";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/ThemeProvider";

describe("CardInfo,  invoice screen display", () => {
  it("due date", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardInfoDetail label={"Vencimento"} value={"08/01"} />
      </ThemeProvider>
    );

    const result = screen.getByText("08/01");

    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(result).toBeInTheDocument();
  });
});
