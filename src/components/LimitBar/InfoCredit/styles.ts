import { theme } from "@/styles/ThemeProvider";
import styled from "styled-components";


interface PositionProps {
  position: string;
}

export const Container = styled.div<PositionProps>`
  text-align: ${(props) => props.position};
  h3,
  p {
    font-size: ${theme.fonts.font_size_text_xsmall};
    font-weight: bold;
    margin: .3em 0;
  }
`;
