import { WrapperClickLeft, WrapperClickRight } from "./style";

interface ClickCardProps {
  onClick: () => void;
}

export const ClickRight = ({ onClick }: ClickCardProps) => {
  return <WrapperClickRight onClick={onClick} />;
};

export const ClickLeft = ({ onClick }: ClickCardProps) => {
  return <WrapperClickLeft onClick={onClick} />;
};
