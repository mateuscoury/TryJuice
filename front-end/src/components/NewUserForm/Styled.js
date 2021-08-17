import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F6F2DF;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  * {
  margin: 0;
  }
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
  text-align: center;
`;
export const ContainerLabel = styled.label`
  padding: 10px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const ContainerName = styled.input`
  border-radius: 5px;
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerEmail = styled.input`
  border-radius: 5px;
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerPassword = styled.input`
  border-radius: 5px;
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerSelect = styled.select`
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
  width: 200px;
`;
export const ContainerOption = styled.option`
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
  width: 200px;
`;
export const FinalizeRegister = styled.button`
  background-color: #35c85c;
  border-radius: 8px;
  padding: 10px 15px;
  color: black;
  border: none;
  outline: none;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 19px;
  &:hover {
    background-color: #4ED070;
    color: black;
  }
`;
