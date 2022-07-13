import { theme } from "@/styles/ThemeProvider";
import styled, { css } from "styled-components";

interface MonthItemProps {
  focused?: boolean;
}

interface IColorMonthItem{
  backgroundColor: string;
}

export const WrapperMonthBar = styled.div`
  height: 40px;
  position: relative;
  width: 375px;
`;

export const PointerTriangle = styled.div<IColorMonthItem>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px 0;
  height: 1.7em;
  left: calc(50% - 1em);
  position: absolute;
  top: 3.2em;
  transform: rotateZ(45deg);
  transition: 1s all;
  width: 1.7em;
`;

export const WrapperMonthItem = styled.section<IColorMonthItem>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  height: 40px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  transition: 1s all;
  width: 375px;
  &::-webkit-scrollbar {
    display: none;
  }
  &::after {
    content: "";
  }
`;

export const MonthItem = styled.p<MonthItemProps>`
  color: ${(props) => props.theme.colors.white_color};
  font-size: ${theme.fonts.font_size_text_large};
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
