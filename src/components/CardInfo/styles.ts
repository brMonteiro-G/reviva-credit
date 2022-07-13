import styled from "styled-components";

export const SectionCard = styled.section`
  background-color: ${(props) => props.theme.colors.default_color};
  margin: auto 0;
  max-height: 200px;
  width: 100%;
`;

export const DivSeparator = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0px;
`;
