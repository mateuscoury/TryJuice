import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`;
export const InnerContainer = styled.div`
  display:flex;
  height:700px;
  width:400px;
  flex-direction:column;
  `;
export const ProfileImage = styled.img`
  width:150px;
  cursor:pointer;
  height:150px;
  border:2px dashed black;
  background:url(https://www.collinsdictionary.com/images/full/beer_123784216.jpg);
  background-size:150px;
  background-position:center;
  transition:0.2s ease all;
  &:hover{
    opacity:0.5
}
`;
export const AppName = styled.h1`
`;
export const AreaImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:300px;
  border-bottom:1px solid black;
  `;
export const ContainerForm = styled.div`

  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  `;
export const FormContainer = styled.form`

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:80%;
  border-bottom:2px solid black;
  height:100%;

`;
export const LoginInput = styled.input`
  padding:10px;
  border-radius:5px;
  outline:none;
  margin-bottom:15px;
`;
export const PasswordInput = styled.input`
  padding:10px;
  border-radius:5px;
  outline:none;
  margin-bottom:15px;
`;
export const SubmitButton = styled.button`
  background-color:green;
  border-radius:5px;
  padding:10px;
  color:white;
  width:200px;
  border:none;
  outline:none;
  font-weight:bold;
  margin-bottom:15px;
  cursor:pointer;
  transition:0.2s ease all;
  font-size:15px;
  &:hover{
    background-color:white;
    color:green;

}
`;
export const RegisterButton = styled.button`
  background-color:white;
  border-radius:5px;
  width:200px;
  font-size:15px;
  font-weight:bold;
  padding:10px;
  color:green;
  border:1px solid green;
  outline:none;
  margin-bottom:15px;
  cursor:pointer;
  transition:all ease 0.5s;
  &:hover{
    background-color:green;
    color:white;

}
`;
export const LoginLabel = styled.label`
  margin-right:150px;
  margin-bottom:7px;
  font-weight:bold;
  font-size:15px;
`;
export const PassLabel = styled.label`
  margin-bottom:7px;
  margin-right:120px;
  font-weight:bold;
  font-size:15px;
`;
export const InvalidBox = styled.div`
`;
