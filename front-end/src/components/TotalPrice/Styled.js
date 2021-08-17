import styled from 'styled-components';

export const PriceTag = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 15px;
  width: 350px;
  background-color :#e8dca9;
  cursor: pointer;
border-radius: 15px;
  font-weight: 600;
`;

export const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Container1 = styled.div`
  width: 100%;

  display:block
`;
export const Beer = styled.img`
width: 200px;
height: 200px;
cursor: pointer;
position: fixed;
bottom: 20px;

animation: shake 5s cubic-bezier(.36,.07,.19,.97) both infinite;


  transform: translate3d(0, 0, 0);
right: 20px;
transition: all ease 0.5s;
&:hover{
  opacity: 0.7;
}
@keyframes shake {
  0% {
    transform: translate3d(0, 0, 0);
  }
  
  20% {
    transform: translate3d(2px, 0, 0);
  }

  30% {
    transform: translate3d(-4px, 0, 0);
  }

  40%{
    transform: translate3d(4px, 0, 0);
  }
  100%{
    transform: translate3d(4px, 0, 0);
  }
  }


`;
