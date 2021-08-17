import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ContainerItem = styled.div`
  background-color: #FF914D;
  border-radius: 6px 0 0 6px;
  padding: 10px;
  color: black;
  width: 35px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const ContainerName = styled.div`
  background-color: #EFEFF0;
  padding: 10px;
  color: black;
  width: 300px;
  margin-bottom: 15px;
  font-size: 20px;
`;
export const ContainerEmail = styled.div`
background-color: #E8DCA9;
  padding: 10px;
  color: black;
  width: 300px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const ContainerType = styled.div`
  background-color: #35C85C;
  padding: 10px;
  color: black;
  width: 200px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const DeleteItem = styled.button`
  background-color: #FF7070;
  border-radius: 0 6px 5px 0;
  padding: 10px;
  color: black;
  width: 120px;
  border: none;
  outline: none;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.5s ease all;
  font-size: 20px;
  &:hover {
    background-color: #FF3333;
    color: white;
  }
`;
