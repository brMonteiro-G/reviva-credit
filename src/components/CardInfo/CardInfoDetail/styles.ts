import { theme } from "@/styles/ThemeProvider";
import styled from "styled-components";

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: ${theme.fonts.font_size_text_medium};
    margin-right: 0.3rem;
    font-weight: ${theme.fonts.font_weight_normal};
  }
  p {
    font-size: ${theme.fonts.font_size_text_medium};
    font-weight: ${theme.fonts.font_weight_contrast};
  }
`;