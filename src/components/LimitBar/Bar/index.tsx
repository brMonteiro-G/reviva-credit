import * as SC from "./styles";

interface BarProps {
  widthBar: number;
}

const Bar = ({ widthBar }: BarProps) => {
  return (
    <SC.LimitCartAvailable>
      <SC.LimitCartUsed width={widthBar} />
    </SC.LimitCartAvailable>
  );
};

export default Bar;
