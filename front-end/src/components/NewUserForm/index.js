import React, { useContext, useEffect, useState } from 'react';
import api from '../../Apis/api1';
import { Context } from '../../Context';

import {
  Container,
  Form,
  ContainerDiv,
  Paragraph,
  Title,
  ContainerLabel,
  ContainerName,
  ContainerEmail,
  ContainerPassword,
  ContainerSelect,
  ContainerOption,
  FinalizeRegister,
  /* InvalidBox, */
} from './Styled';

export default function NewUserForm() {
  const { users, setUsers } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [valid, setValid] = useState(true);
  const [logged, setLogged] = useState(true);

  const submitHandler = async (e) => {
    const CREATED = 201;
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const result = await api
      .registerUser({ name, email, password, role }, token)
      .then((data) => {
        setUsers([...users, { id: data.data.response.id, name, email, role }]);
        return data;
      })
      .catch((err) => err.message);
    if (result.status !== CREATED) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  };
  useEffect(() => {
    const PASSLENGHT = 6;
    const NAMELENGTH = 12;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (
      regex.test(email)
      && password.length >= PASSLENGHT
      && name.length >= NAMELENGTH
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [email, name.length, password]);

  return (
    <Container>
      <Form>
        <Title>Cadastrar novo usuário</Title>
        <ContainerDiv>
          <Paragraph>Nome</Paragraph>
          <ContainerLabel htmlFor="name">
            <ContainerName
              data-testid="admin_manage__input-name"
              type="text"
              id="name"
              name="name"
              placeholder="Nome e sobrenome"
              onChange={ ({ target }) => setName(target.value) }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Email</Paragraph>
          <ContainerLabel htmlFor="email">
            <ContainerEmail
              data-testid="admin_manage__input-email"
              type="text"
              id="email"
              name="email"
              placeholder="seu-email@site.com.br"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Senha</Paragraph>
          <ContainerLabel htmlFor="password">
            <ContainerPassword
              data-testid="admin_manage__input-password"
              type="password"
              id="password"
              name="password"
              placeholder="******"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Tipo</Paragraph>
          <ContainerSelect
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setRole(target.value) }
          >
            <ContainerOption value="administrator">
              Administrador
            </ContainerOption>
            <ContainerOption value="customer">Cliente</ContainerOption>
            <ContainerOption value="seller">Vendedor</ContainerOption>
          </ContainerSelect>
        </ContainerDiv>
        <ContainerDiv>
          <FinalizeRegister
            data-testid="admin_manage__button-register"
            type="submit"
            disabled={ valid }
            onClick={ submitHandler }
          >
            CADASTRAR
          </FinalizeRegister>
        </ContainerDiv>
        {logged === false && (
          <p data-testid="admin_manage__element-invalid-register">
            Dados inválidos
          </p>
        )}
      </Form>
    </Container>
  );
}
