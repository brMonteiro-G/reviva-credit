import styled from "styled-components";
import { theme } from "styles/ThemeProvider";

export const LimitCartAvailable = styled.div`
  width: 100%;
  height: 2rem;
  background-color: ${theme.colors.tertiary_color};
  border-radius: 0.5rem;
`;

interface LimitCartProps {
  width: number;
}

export const LimitCartUsed = styled.div<LimitCartProps>`
  width: ${(props) => props.width.toString().concat("%")};
  height: 2rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.quintenary_color};
  transition: 2s;
`;