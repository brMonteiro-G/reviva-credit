import styled from 'styled-components';

export const WelcomeUser = styled.div`
  display: flex;
  padding: 1%;
  p:nth-child(2n) {
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  
  p {
    font-size: ${(props) => props.theme.fonts.font_size_text_small};
  }
  u{
    padding-left: 5px;
  }
`;

