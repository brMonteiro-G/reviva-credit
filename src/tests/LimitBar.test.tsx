import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/ThemeProvider";
import Bar from "@/components/LimitBar/Bar";

describe("component <Limit Bar/>", () => {
  it("should display the values", () => {
    const limite = 3000;
    const utilizado = 1599.9;

    const calculatePercent = jest.fn((limite, utilizado) => {
      return (utilizado * 100) / limite;
    });

    render(
      <ThemeProvider theme={theme}>
        <Bar widthBar={Number(calculatePercent)} />
      </ThemeProvider>
    );

    expect(calculatePercent(3000, 1599.9)).toBe(53.33);
  });
});
