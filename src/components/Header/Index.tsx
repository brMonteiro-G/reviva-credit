import Circle from '@/components/Header/Circle/Index';
import { HeaderContent, WelcomeUser } from '@/components/Header/Styles';

interface HeaderProps {
  regards?: string;
  user?: string
  title: string
  subtitle: string

}
export default function Header({ regards, user, title, subtitle }: HeaderProps) {
  return (
    <WelcomeUser>
      <div>
        <HeaderContent>
          <p> {regards} </p>
          <p>{user}</p>
        </HeaderContent>
        <HeaderContent>
          <p>{title}</p>
          <p>
            <u>{subtitle}</u>
          </p>
        </HeaderContent>
      </div>
      <Circle />
    </WelcomeUser>
  );
}
