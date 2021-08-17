import styled from 'styled-components';

export const OrderContainer = styled.div`
  align-items: stretch;
  background-color: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: rgba(0, 0, 0, 0.322) 2px 2px 6px;
  display: flex;
  width: 790px;

  &:hover {
    background-color: #f2ecd0;
  }
`;

export const OrderIdContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 200px;

  p:first-of-type {
    font-size: 24px;
    margin: 0;
  }
`;

export const OrderId = styled.p`
  font-size: 36px;
  margin: 0;
`;

export const OrderGeneral = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const OrderData = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
`;

export const OrderDetailsInfo = styled.div`
  align-items: center;
  background-color: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
  display: flex;
  font-size: 28px;
  font-weight: 700;
  height: 65px;
  justify-content: center;
  width: 265px;

  &:last-child::before {
    content: 'R$ '
  }
`;

export const OrderAddress = styled.p`
  align-items: center;
  display: flex;
  font-size: 24px;
  height: 70px;
  justify-content: flex-end;
  margin: 0px 5px;
`;
