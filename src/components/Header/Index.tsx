import Circle from '@/components/Header/Circle/Index';
import { HeaderContent, WelcomeUser } from '@/components/Header/Styles';

export default function Header() {
  return (
    <WelcomeUser>
      <div>
        <HeaderContent>
          <p> Olá, </p>
          <p>Renato!</p>
        </HeaderContent>
        <HeaderContent>
          <p>Bem vindo ao</p>
          <p>
            <u>Reviva Credit</u>
          </p>
        </HeaderContent>
      </div>
      <Circle />
    </WelcomeUser>
  );
}
