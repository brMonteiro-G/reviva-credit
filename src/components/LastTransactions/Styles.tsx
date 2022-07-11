import styled from 'styled-components';
const PATH_SVG = '/images/wave.svg'

export const ContainerLastTransactions = styled.div`
  background-color:${props => props.itemProp == 'first' ?
    props.theme.colors.default_color:
    props.theme.colors.primary_color 
  };
  background-image: url(${(props) => props.itemProp == 'first' ? PATH_SVG : ''});
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.itemProp == 'first' ? '310px' : '502px' };
  overflow: auto;
  padding: 3em 2em 2em 2em;
  padding-right: ${(props) => props.itemProp == 'first' ? '2em' : '1em' };
  width: 375px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #1b60b4;
    border-radius: 10px;
    border: 4px solid ${(props) => props.theme.colors.primary_color};
  }
`;

export const Title = styled.strong`
  color: ${(props) => props.theme.colors.white_color};
  font-size: ${(props) => props.theme.fonts.font_size_text_medium};
  font-weight: ${(props) => props.theme.fonts.font_weight_normal};
  line-height: 19px;
  margin: .5rem 0;
  p:last-child {
    font-weight: ${(props) => props.theme.fonts.font_weight_contrast};
  }
`;

export const Content = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
`;

export const PaymentDescription = styled(Title)`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
  width: fit-content;
`;

export const PaymentValue = styled(Title)`
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
  justify-self: flex-end;
`;

export const Slash = styled.div`
  background: ${(props) => props.theme.colors.white_color};
  height: 1px;
  justify-self: center;
  width: 60px;
`;

export const DivShowAll = styled.div`
  align-self: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.colors.white_color};
  color: ${(props) => props.theme.colors.white_color};
  font-size: ${(props) => props.theme.fonts.font_size_text_small};
  font-weight: ${(props) => props.theme.fonts.font_weight_normal};
  margin-top: auto;
  &::after{
    border: none;
    content: " ->";
    height: 5px;
    width: 5px;
  }
  &:active {
    -webkit-tap-highlight-color: transparent;
  }
`;
