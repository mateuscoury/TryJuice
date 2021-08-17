import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F6F2DF;
  display: flex-block;
  justify-content: center;
  * {
  margin-top: 0;
}
`;
export const ContainerHeader = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ContainerItem = styled.div`
  background-color: #EFF6FB;
  border-radius: 6px 0 0 6px;
  padding: 10px;
  color: black;
  width: 35px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerDescription = styled.div`
  background-color: #EFF6FB;
  padding: 10px;
  color: black;
  width: 550px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerQuantity = styled.div`
  background-color: #EFF6FB;
  padding: 10px;
  color: black;
  width: 110px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerUnitValue = styled.div`
  background-color: #EFF6FB;
  padding: 10px;
  color: black;
  width: 120px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerTotalValue = styled.div`
  background-color: #EFF6FB;
  padding: 10px;
  color: black;
  width: 120px;
  font-size: 18px;
  text-align: center;
`;
export const DeleteItem = styled.button`
  background-color: #EFF6FB;
  border-radius: 0 6px 5px 0;
  padding: 10px;
  color: black;
  width: 15%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
`;
export const ContainerDiv = styled.div`
  padding: 10px;
  color: black;
  font-size: 18px;
`;
export const Title = styled.h1`
  padding: 50px;
  color: black;
  margin-left: 160px;
  font-size: 22px;
  font-weight: bold;
`;
export const Paragraph = styled.p`
  color: black;
  font-size: 17px;
  text-align: center;
`;
export const EmptyCart = styled.h4`
  text-align: center;
  padding: 100px;
`;
export const TotalOrder = styled.h1`
  background-color: #22813C;
  border-radius: 10px;
  padding: 20px 10px;
  color: white;
  width: 250px;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 28px;
  text-align: center;
  margin: 20px auto;
`;
