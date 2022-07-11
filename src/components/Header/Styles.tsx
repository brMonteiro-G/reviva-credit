import styled from 'styled-components';

export const WelcomeUser = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: auto;
  overflow: hidden;
  padding: 2em 2em 0 2em;
  width: 375px;
  p:nth-child(2n) {
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
    padding-left: 5px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  
  p {
    font-size: ${(props) => props.theme.fonts.font_size_text_medium};
  }

`;

