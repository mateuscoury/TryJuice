import React from 'react';

import { HeaderAdmin, NewUserForm, UsersList } from '../../components';

import ContainerAdmin from './Styled';

const Admin = () => (
  <ContainerAdmin>
    <HeaderAdmin />
    <NewUserForm />
    <UsersList />
  </ContainerAdmin>
);

export default Admin;
