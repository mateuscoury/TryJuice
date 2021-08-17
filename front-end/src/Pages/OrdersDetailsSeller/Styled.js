import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f2df;
  color: #2e1b0f;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ProductsCustomerContainer = styled.div`
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.5);
  background-color: #f6f2df;
  color: #2e1b0f;
  margin: 50px auto;
  padding: 10px;
  width: 60%;
  margin-bottom: 30px;
`;

export const PreparingCheckButton = styled.button`
  background-color: #35c85c;
  border-radius: 5px;
  padding: 5px;
  color: #2e1b0f;
  width: 20%;
  font-weight: 700;
  text-align: center;

  &:hover {
    background-color: #5DD37C;
  }

  &:disabled{
    background: transparent;
    color: gray;
  }
`;

export const HeaderOrderStatus = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  padding: 5px;
  width: 855px;
  margin: 10px auto;
`;

export const BodyItensOrders = styled.div`
  width: 100%;
`;

export const DispatchCheckButton = styled.button`
  background-color: #ff914d;
  border-radius: 5px;
  padding: 5px;
  color: #2e1b0f;
  width: 20%;
  font-weight: 700;
  text-align: center;

  &:hover {
    background-color: #ffaf4d;
  }

  &:disabled{
    background: transparent;
    color: gray;
  }
`;

export const HeaderTitle = styled.h3`
  width: 855px;
  margin: 10px auto;
`;
