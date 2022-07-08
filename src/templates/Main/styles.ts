import { theme } from "@/styles/ThemeProvider";
import styled from "styled-components";

export const ContainerMain = styled.main`
  align-items: center;
  background-color: ${theme.colors.default_color};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 752px;
  margin: auto;
  margin-top: 50px;
  width: 375px;
`;
