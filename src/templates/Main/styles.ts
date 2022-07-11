import styled from "styled-components";

export const ContainerMain = styled.main`
  align-items: center;
  background-color: ${(props) => props.theme.colors.default_color};
  display: flex;
  flex-direction: column;
  height: 812px;
  justify-content: space-between;
  margin: auto;
  padding: 0 2em;
  width: 375px;
`;
