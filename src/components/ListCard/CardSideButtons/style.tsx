import styled from "styled-components";

export const WrapperClickRight = styled.button`
  position: absolute;
  border-top-right-radius: 1.8em;
  border-bottom-right-radius: 1.8em;
  left: 0;
  height: 95%;
  width: 1.5em;
  &:active {
    background-color: #a1a1a186;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const WrapperClickLeft = styled.button`
  border-top-left-radius: 1.8em;
  border-bottom-left-radius: 1.8em;
  position: absolute;
  right: 0;
  height: 95%;
  width: 1.5em;
  &:active {
    background-color: #81818146;
    -webkit-tap-highlight-color: transparent;
  }
`;
