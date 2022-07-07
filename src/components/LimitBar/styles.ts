import styled from "styled-components";
import { theme } from "styles/ThemeProvider";

export const StyledProgressBar = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 31.8rem;
  height: 9.3rem;
  background-color: #eeeeee;
`;

export const Title = styled.h2`
  text-align: left;
  font-weight: 300;
  margin-left: 1rem;
`;

export const ContainerInfoCredit = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 1rem 0 1rem;
`;

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
