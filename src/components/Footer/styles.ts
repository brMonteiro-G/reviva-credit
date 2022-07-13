import styled from "styled-components";

export const BaseFooter = styled.footer`
  align-self: flex-end;
  background-color: ${(props) => props.theme.colors.default_color};
  height: 60px;
  padding: 2rem 0;
  width: 100%;
  &:active {
    -webkit-tap-highlight-color: transparent;
  }
`;
