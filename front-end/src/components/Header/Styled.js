import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F6F2DF;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 80px;
`;

export const ProductsButton = styled.button`
  background-color: #FF914D;
  padding: 10px;
  color: #2e1b0f;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;

  &:hover {
    background-color: #ff751f;
  }
`;

export const OrdersButton = styled.button`
  background-color: #E8DCA9;
  padding: 10px;
  color: #2e1b0f;
  width: 50%;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;

  &:hover {
    background-color: #e1d28e;
  }
`;

export const UserButton = styled.button`
  background-color: #35C85C;
  padding: 10px;
  color: #2e1b0f;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
`;

export const LogoutButton = styled.button`
  background-color: #ff0000;
  padding: 10px;
  color: white;
  width: 10%;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;

  img {
    max-height: 100%;
  }

  &:hover {
    background-color: #ff5555;
  }
`;
