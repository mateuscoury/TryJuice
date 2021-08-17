import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  top:0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
`;
export const Content = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
  width: 900px;
  border-radius: 30px;
 /*  background: url('https://media.istockphoto.com/photos/beer-background-ice-cold-pint-with-water-drops-condensation-picture-id466424908?k=6&m=466424908&s=170667a&w=0&h=X6U1drcTpJj25KMsdQ4iC_K-rWtJJUObSygtp3mteFY=');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 450px; */
  height: 900px;
  background-color: #e8dca9;
 

`;
export const UpContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;
height:400px;
border-top-left-radius: 30px;
border-top-right-radius:30px;
h1{
  margin:0 20px;
  color:#ff914d
}

& img{
   width: 300px;
   height: 300px;
  }

`;
export const BotContent = styled.div`
width: 100%;
display: flex;

justify-content: center;
align-items: center;
font-size: 50px;
text-transform: uppercase;
flex:1;
img{
  width: 500px;
  height: 500px;
  margin-bottom: 50px;
  opacity: 0;
  transition: 0.5s all ease;
  animation-name:reveal;
  animation-delay: 1.5s;
  animation-duration: 1s;
  animation-fill-mode:forwards;

  @keyframes reveal{
    0%{
      opacity: 0;

    }
    100%{
      opacity: 1;
    }
  }
}
  
`;
