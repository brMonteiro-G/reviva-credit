import Circle from "@/components/Header/Circle/Index";
import {
  HeaderContent,
  TextHeaderBold,
  TextHeaderUnderline,
  WelcomeUser,
} from "@/components/Header/Styles";

interface HeaderProps {
  regards?: string;
  user?: string;
  title?: string;
  subtitle?: string;
  underline?: string;
}
export default function Header({
  regards,
  user,
  title,
  subtitle,
  underline
}: HeaderProps) {
  return (
    <WelcomeUser>
      <HeaderContent>
        <p> {regards} </p>
        <TextHeaderBold>{user}</TextHeaderBold>
      </HeaderContent>
      <HeaderContent>
        <p>{title}</p>
        <TextHeaderUnderline>{subtitle}</TextHeaderUnderline>
        <TextHeaderBold>{underline}</TextHeaderBold>
      </HeaderContent>
      <Circle />
    </WelcomeUser>
  );
}
