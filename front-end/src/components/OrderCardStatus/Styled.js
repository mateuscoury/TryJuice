import styled from 'styled-components';

export default styled.p`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
  display: flex;
  font-size: 32px;
  font-weight: 700;
  height: 140px;
  justify-content: center;
  margin: 5px;
  vertical-align: center;
  width: 295px;
`;
