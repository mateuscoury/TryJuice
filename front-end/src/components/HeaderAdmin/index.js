import React from 'react';
import { useHistory } from 'react-router-dom';

import
{ Container,
  ManageUsers,
  None,
  NameAdmin,
  LogoutButton,
  /* InvalidBox, */
} from './Styled';

export default function HeaderAdmin() {
  const history = useHistory();

  const userName = JSON.parse(localStorage.getItem('user')).name;

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('newUser');
    history.push('/login');
  };

  return (
    <Container>
      <ManageUsers>
        GERENCIAR USUÁRIOS
      </ManageUsers>
      <None>
        { ' ' }
      </None>
      <NameAdmin>
        { userName }
      </NameAdmin>
      <LogoutButton
        type="button"
        onClick={ logout }
      >
        Sair
      </LogoutButton>
    </Container>
  );
}
