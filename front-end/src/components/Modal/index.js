import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, UpContent, BotContent } from './styled';
import { imagesMen, jokes } from './helpers';

const Modal = ({ data, setVisible }) => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  console.log(data);

  const randomJoke = () => {
    const randomId = Math.floor(Math.random() * jokes.length);
    return jokes[randomId];
  };

  const randomMenImage = () => {
    const randomId = Math.floor(Math.random() * imagesMen.length);
    return imagesMen[randomId];
  };

  return (
    <Container>
      <button type="button" onClick={ () => setVisible(false) }>FECHAR</button>
      <Content>
        <UpContent>
          {/*    <img src={ data.urlImage } alt={ data.name } /> */}
          <h1>{randomJoke()}</h1>
        </UpContent>
        <BotContent>
          <img name="drunk" alt="imagem" src={ randomMenImage() } />
        </BotContent>
      </Content>
    </Container>
  );
};

export default Modal;
Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
