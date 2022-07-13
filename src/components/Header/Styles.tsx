import styled from "styled-components";

export const WelcomeUser = styled.header`
  font-size: ${(props) => props.theme.fonts.font_size_text_medium};
  height: 80px;
  margin-bottom: auto;
  overflow: hidden;
  padding: 2em 2em 0 1.5em;
  position: relative;
  width: 375px;
  p:nth-child(2n) {
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
`;

export const TextHeaderUnderline = styled.p`
  font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
  text-decoration: underline;
`;
export const TextHeaderBold = styled.p`
  font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
`;
