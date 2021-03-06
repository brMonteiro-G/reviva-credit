import styled from "styled-components";

export const WrapperCard = styled.section`
  background-color: ${(prop) => prop.color};
  border-radius: 1.8em;
  box-shadow: 0px 3px 5px 0px #00000050;
  color: ${(prop) => prop.theme.colors.white_color};
  display: grid;
  grid-template-areas:
    "TitleCard TitleCard"
    "NameClientCard NameClientCard"
    "NumberCard FlagCard"
    "WrapperCardDetails FlagCard";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr 3em 1fr;
  height: 18em;
  margin: 0 1em;
  padding: 1.5em 1.9em;
  scroll-snap-align: center;
  width: 300px;

  &:last-child{
    margin-right: 3.6em ;
  }
  &:first-child{
    margin-left: 3.6em ;
  }
`;
export const TitleCard = styled.h1`
  font-size: ${(props)=>props.theme.fonts.font_size_text_xlarge};
  font-weight: ${(props)=>props.theme.fonts.font_weight_contrast};
  grid-area: TitleCard;
`;

export const NameClientCard = styled.h3`
  align-self: flex-end;
  font-size: ${(props)=>props.theme.fonts.font_size_text_large};
  font-weight: ${(props)=>props.theme.fonts.font_weight_contrast};
  grid-area: NameClientCard;
`;

export const NumberCard = styled.p`
  align-self: flex-end;
  font-size: ${(props)=>props.theme.fonts.font_size_text_medium};
  font-weight: ${(props)=>props.theme.fonts.font_weight_contrast};
  grid-area: NumberCard;
`;

export const DateCard = styled.p`
  font-size: ${(props)=>props.theme.fonts.font_size_text_medium};
`;

export const CvvCard = styled.p`
  font-size: ${(props)=>props.theme.fonts.font_size_text_medium};
`;

export const FlagCard = styled.img`
  align-self: center;
  grid-area: FlagCard;
  justify-self: flex-end;
  width: 4.6em;
`;

export const WrapperCardDetails = styled.div`
  display: flex;
  grid-area: WrapperCardDetails;
  justify-content: space-between;
`;
