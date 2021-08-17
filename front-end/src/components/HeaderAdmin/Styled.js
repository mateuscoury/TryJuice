import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F6F2DF;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 80px;
`;

export const ManageUsers = styled.button`
  background-color: #FF914D;
  padding: 10px;
  color: #2e1b0f;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
`;

export const None = styled.div`
  background-color: #E8DCA9;
  padding: 10px;
  color: white;
  width: 50%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  transition: 0.2s ease all;
  font-size: 15px;
`;

export const NameAdmin = styled.button`
  background-color: #35C85C;
  padding: 10px;
  color: #2e1b0f;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
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
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
  
  &:hover {
    background-color: #ff5555;
    color: white;
  }
`;
