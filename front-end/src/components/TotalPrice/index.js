import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { PriceTag, Container, Container1, Beer } from './Styled';
import { Context } from '../../Context';

export default function TotalPrice() {
  /* const [show, setShow] = useState(false); */
  const { setTotalPrice } = useContext(Context);
  const [showCart, setShowCart] = useState(false);
  const history = useHistory();
  const { products } = useContext(Context);
  const selectedProducts = products.filter((product) => product.quantity > 0);
  const totalValue = products.reduce((total, product) => {
    const productPrice = parseFloat(product.price);
    total += productPrice * product.quantity;
    return total;
  }, 0);
  setTotalPrice(totalValue);

  const bodyReturn = () => (
    <PriceTag
      data-testid="customer_products__button-cart"
      disabled={ !totalValue }
      onClick={ () => setShowCart(!showCart) }
      /*    show={ show } */
    >
      <Container>
        <ShoppingBasketIcon style={ { height: 50, width: 50 } } />

        <span>
          {`QUANTIDADE DE ITENS : ${selectedProducts.length}`}
        </span>
        <ArrowDropDownIcon
          style={ { height: 50,
            width: 50,
            position: 'absolute',
            right: 0,
            top: 0,
          } }
        />

      </Container>
      <Container1>
        {selectedProducts.map((e, i) => (
          <div
            style={ { display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '15px',
            } }
            key={ i }
          >
            <img
              style={ {
                height: 50,
                width: 50,
                borderRadius: '50%',
                border: '3px solid black' } }
              alt={ e }
              src={ e.urlImage }
            />
            <p>{e.name}</p>
            <p>{(Number(e.price) * e.quantity).toFixed(2)}</p>

          </div>
        ))}
        <span>Ver carrinho: R$ </span>
        <span data-testid="customer_products__checkout-bottom-value">
          {totalValue.toFixed(2).replace(/\./, ',')}
        </span>
        <button
          type="button"
          style={ {
            position: 'absolute',
            bottom: 0,
            right: 0,
            background: 'transparent',
            outline: 0,
            border: 0,
            cursor: 'pointer',
          } }
          onClick={ () => { history.push('/customer/checkout'); } }
        >
          Finalizar compra
        </button>
      </Container1>
    </PriceTag>
  );
  return (
    <>
      {!showCart

        && <Beer
          onClick={ () => setShowCart(!showCart) }
          alt="beer"
          src="https://icons-for-free.com/iconfiles/png/512/beer-1320568024709964641.png"
        />}
      {showCart && bodyReturn()}
    </>
  );
}
