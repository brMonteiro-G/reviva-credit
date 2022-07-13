import { theme } from "@/styles/ThemeProvider";
import SvgSpinner from "../Spinner";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <SvgSpinner fill={theme.colors.primary_color}/>
    </Container>
  );
};

export default Loading;
