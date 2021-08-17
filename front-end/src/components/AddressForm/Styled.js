import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F6F2DF;
  display: flex;
  justify-content: center;
`;
export const Form = styled.div`
  padding: 10px;
  color: black;
  margin-bottom: 10px;
  margin-top: 60px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerDiv = styled.div`
  display: inline-block;
  padding: 10px;
  color: black;
  font-size: 18px;
`;
export const Title = styled.h1`
  padding: 10px;
  color: black;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
`;
export const Paragraph = styled.p`
  color: black;
  font-size: 17px;
`;
export const ContainerLabel = styled.label`
  padding: 10px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const ContainerAddress = styled.input`
  background-color: #E0E0E1;
  padding: 8px;
  color: black;
  border: 0 none;
  outline: 0;
  margin-bottom: 20px;
  font-size: 18px;
  width: 600px;
`;
export const ContainerNumber = styled.input`
  background-color: #E0E0E1;
  padding: 8px;
  color: black;
  border: 0 none;
  outline: 0;
  margin-bottom: 20px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerSelect = styled.select`
  padding: 8px;
  color: black;
  border-color: #EFEFF0;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  width: 300px;
`;
export const FinalizeOrder = styled.button`
  background-color: #22813C;
  border-radius: 10px;
  padding: 20px 10px;
  color: white;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
  &:hover {
    background-color: #2BA14A;
    color: white;
  }
`;
