import styled from "styled-components";

export const BaseFooter = styled.footer`
  align-items: center;
  align-self: center;
  background-color: ${(props) => props.theme.colors.default_color};
  margin: auto;
  padding: 2rem;
  height: 60px;
  width: 375px;
`;
