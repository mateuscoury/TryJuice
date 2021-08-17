import styled from 'styled-components';

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 80%;
  justify-self: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 40px;
  background-color: white;

  * {
    box-sizing: border-box;
  }

  &:hover {
    transition: 0.2s;
    box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductName = styled.h2`
  color: #764526;
`;

export const ImageContainer = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  outline: 0;
  cursor: pointer;

  img {
    max-width: 100%;
    height: 300px;
  }
`;

export const CardPrice = styled.div`
  margin-bottom: 20px;
  color: #764526;
  font-weight: 700;
  font-size: 24px;
  margin: 10px 0;

  &::before {
    content: 'R$ ';
  }
`;

export const ProductData = styled.div`
  display: flex;
`;

export const QuantityControl = styled.button`
  font-size: 24px;
  width: 35px;
  background-color: #eee5bf;
  border: 1px solid #764526;

  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }
`;

export const QuantityInput = styled.input`
  font-size: 18px;
  text-align: center;
  width: 4ch;
  border: none;
  border-bottom: 1px solid #764526;
  border-top: 1px solid #764526;
`;
