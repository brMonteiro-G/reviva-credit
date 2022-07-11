import styled from "styled-components";
const PATH_SVG = "/images/wave.svg";

export const Container = styled.div`
  padding: 1%;
  width: 375px;
  height: 502px;
  background-image: url(${(props) =>
    props.itemProp == "first" ? PATH_SVG : ""});
  background-color: ${(props) =>
    props.itemProp == "first"
      ? props.theme.colors.white_color
      : props.theme.colors.primary_color};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.strong`
  display: inline-block;
  width: min-content;
  justify-self: center;
  padding-left: 3%;
  padding-top: 5%;

  color: ${(props) => props.theme.colors.white_color};
  font-size: ${(props) => props.theme.fonts.font_size_text_medium};
  font-weight: ${(props) => props.theme.fonts.font_weight_normal};
  font-style: normal;
  margin-bottom: 1.6rem;
  line-height: 19px;
  p:last-child {
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
    width: min-content;
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
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  color: ${(props) => props.theme.colors.white_color};
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
  font-weight: ${(props) => props.theme.fonts.font_weight_normal};
`;
