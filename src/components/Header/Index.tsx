import Circle from '@/components/Header/Circle/Index';
import { HeaderContent, WelcomeUser } from '@/components/Header/Styles';
import { UsersContext } from '@/contexts/usersContext';
import { serviceUser } from '@/services/ServiceUser';
import { useContext, useState } from 'react';

interface HeaderProps {
  regards?: string;
  user?: string
  title: string
  subtitle: string

}
export default function Header({ regards, user, title, subtitle }: HeaderProps) {
  //const {users, setUsers} = useContext(UsersContext);
  const [userState, setUserState] = useState({
    id: '',
    name: ''
  });
  user= userState.name
  serviceUser(setUserState);
    return (
    <WelcomeUser>
      <div>
        <HeaderContent>
          <p> {regards} </p>
          <p>{user }</p>
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
