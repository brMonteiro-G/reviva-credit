import { theme } from "@/styles/ThemeProvider";
import styled, { css } from "styled-components";

interface MonthItemProps {
    focused?: boolean;
  }
  
  export const WrapperMonthBar = styled.div`
    width: 375px;
    height: 200px;
    position: relative;
  `;
  
  export const PointerTriangle = styled.div`
    width: 2em;
    height: 2em;
    background-color: red;
    transform: rotateZ(45deg);
    position: absolute;
    left: calc(50% - 1em);
    top: 2.5em;
    z-index: -1;
  `;
  
  export const WrapperMonthItem = styled.section`
    align-items: center;
    background-color: red;
    display: flex;
    height: 40px;
    overflow: auto;
    scroll-snap-type: x mandatory;
    width: 375px;
    &::-webkit-scrollbar {
      display: none;
    }
    &::after {
      content: "";
    }
  `;
  
  export const MonthItem = styled.p<MonthItemProps>`
    font-size: ${theme.fonts.font_size_text_large};
    font-stretch: condensed;
    font-weight: ${theme.fonts.font_weight_normal};
    margin: 0 0.9em;
    scroll-snap-align: center;
    user-select: none;
    &::after {
      color: transparent;
      content: attr(title);
      display: block;
      font-weight: bold;
      height: 1px;
      overflow: hidden;
      visibility: hidden;
    }
    &:last-child {
      margin-right: 9em;
    }
    &:first-child {
      margin-left: 9em;
    }
    ${({ focused }) =>
      focused &&
      css`
        font-weight: ${theme.fonts.font_weight_contrast};
      `}
  `;