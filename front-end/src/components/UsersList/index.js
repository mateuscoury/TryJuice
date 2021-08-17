import React, { useContext } from 'react';
import ItemListUser from '../ItemListUser';
import { Context } from '../../Context';
import {
  Container,
  ContainerHeader,
  ContainerItem,
  ContainerName,
  ContainerEmail,
  ContainerType,
  DeleteItem,
  Title,
  ContainerDiv,
} from './Styled';

export default function Users() {
  const { users } = useContext(Context);
  return (
    <Container>
      <Title>Lista de usuários</Title>
      <ContainerHeader>
        <ContainerItem>Item</ContainerItem>
        <ContainerName>Nome</ContainerName>
        <ContainerEmail>E-mail</ContainerEmail>
        <ContainerType>Tipo</ContainerType>
        <DeleteItem>Excluir</DeleteItem>
      </ContainerHeader>
      <ContainerDiv>
        { users.length > 0 ? (
          users.map((user, index) => (
            <ItemListUser
              key={ user.id }
              item={ user.id }
              name={ user.name }
              email={ user.email }
              role={ user.role }
              index={ index }
            />
          ))
        ) : (
          <h2>Não há usuários</h2>
        ) }
      </ContainerDiv>
    </Container>
  );
}
