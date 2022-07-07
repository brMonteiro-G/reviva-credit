import { theme } from "@/styles/ThemeProvider";
import styled from "styled-components";

interface CardProps {
  urlImage: string;
}

export const Card = styled.div<CardProps>`
  width: 10rem;
  height: 6rem;
  background-color: ${theme.colors.primary_color};
  border-radius: 0.5em;
  background-image: url(${(props) => props.urlImage});
  background-repeat: no-repeat;
  background-size: 46px;
  background-position: center;
`;

export const ContainerInfoMain = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerNameAndNumber = styled.div`
  margin-left: 1rem;
  h2 {
    font-size: ${theme.fonts.font_size_text_large};
  }
  p {
    font-size: ${theme.fonts.font_size_text_medium};
    font-weight: ${theme.fonts.font_weight_contrast};
  }
`;