import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e8dca9;
  display: flex;
  justify-content: space-between;
  margin: 0;
  height: 80px;
`;

export const RigthButtons = styled.div`
  display: flex;
  margin: 0;
`;

export const OrdersButton = styled.button`
  background-color: #ff914d;
  padding: 10px;
  color: #2e1b0f;
  width: 30%;
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

export const UserButton = styled.button`
  background-color: #35c85c;
  padding: 10px;
  color: #2e1b0f;
  width: 250px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;

  &:hover {
    background-color: #5DD37C;
  }
`;

export const LogoutButton = styled.button`
  background-color: #ff0000;
  padding: 10px;
  color: white;
  width: 100px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
  
  &:hover {
    background-color: #ff5555;
  }
`;
