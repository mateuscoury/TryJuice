import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #ff8e47;
  display: flex;
  height: 100vh;
  justify-content: center;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const InnerContainer = styled.div`
  background-color: #eee5bf;  
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 35%;
  min-width: 500px;
`;

export const ContainerForm = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const AreaTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
`;

export const CadastroTitle = styled.h1`
  color: #2E1B0F;
  text-align: center;
`;

export const FormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const NameLabel = styled.label`
  color: #2E1B0F;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const NameInput = styled.input`
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 10px;
  width: 50%;
  min-width: 250px;
`;

export const EmailLabel = styled.label`
  color: #2E1B0F;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const LoginInput = styled.input`
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 10px;
  width: 50%;
  min-width: 250px;
`;

export const PassLabel = styled.label`
  color: #2E1B0F;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const PasswordInput = styled.input`
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 10px;
  width: 50%;
  min-width: 250px;
`;

export const SubmitButton = styled.button`
  background-color: #764526;
  border: 1px solid #764526;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  padding: 10px;
  transition: 0.2s ease all;
  width: 50%;
  min-width: 250px;

  &:hover {
    background-color: white;
    color: #764526;
  }
`;

export const LoginGif = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
