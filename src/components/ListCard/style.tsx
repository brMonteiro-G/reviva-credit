import styled from "styled-components";

export const ContainerListCard = styled.div`
  width: 375px;
  position: relative;
  height: 190px;
`;

export const ListCard = styled.section`
  display: inline-flexbox;
  height: 190px;
  overflow: auto;
  position: relative;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  width: 375px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
