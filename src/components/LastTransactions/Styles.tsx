import styled from 'styled-components';

export const Container = styled.div`
  padding: 1%;
  width: 315px;
  height: 456px;
  background-image: url(/images/wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.strong`
  display: inline-block;
  width: min-content;
  justify-self: center;

  color: ${(props) => props.theme.colors.white_color};
  font-size: ${(props) => props.theme.fonts.font_size_text_medium};
  font-weight: ${(props) => props.theme.fonts.font_weight_normal};
  font-style: normal;
  margin-bottom: 1.6rem;
  line-height: 19px;
  p:last-child {
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
  }
`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 2fr);
`;

export const PaymentDescription = styled(Title)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
`;

export const PaymentValue = styled(Title)`
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
`;

export const Slash = styled.div`
  justify-self: center;
  width: 60px;
  height: 0;
  border: 1px solid ${(props) => props.theme.colors.white_color};
`;

export const DivShowAll = styled.div`
  height: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  color: ${(props) => props.theme.colors.white_color};
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
  font-weight: ${(props) => props.theme.fonts.font_weight_normal};
`;
