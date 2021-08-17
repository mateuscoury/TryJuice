import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: 0;
  padding-left: 0;
`;
export const ContainerItem = styled.div`
  background-color: #ff914d;
  border-radius: 6px 0 0 6px;
  padding: 10px;
  color: #2e1b0f;
  width: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const ContainerDescription = styled.div`
  background-color: white;
  padding: 10px;
  color: #2e1b0f;
  width: 550px;
  margin-bottom: 15px;
  font-size: 20px;
`;
export const ContainerQuantity = styled.div`
  background-color: #e8dca9;
  padding: 10px;
  color: #2e1b0f;
  width: 60px;
  margin-bottom: 15px;
  text-align: center;
`;
export const ContainerUnitValue = styled.div`
  background-color: #35c85c;
  padding: 10px;
  color: #2e1b0f;
  width: 60px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const ContainerTotalValue = styled.div`
  background-color: #9d5c32;
  padding: 10px;
  color: #2e1b0f;
  width: 60px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const DeleteItem = styled.button`
  background-color: #FF7070;
  border-radius: 0 6px 5px 0;
  padding: 10px;
  color: black;
  width: 15%;
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
