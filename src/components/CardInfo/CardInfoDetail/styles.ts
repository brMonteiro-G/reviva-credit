import styled from "styled-components";

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: ${(props) => props.theme.fonts.font_size_text_medium};
    margin-right: 0.3rem;
    font-weight: ${(props) => props.theme.fonts.font_weight_normal};
  }
  p {
    font-size: ${(props) => props.theme.fonts.font_size_text_medium};
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
  }
`;
