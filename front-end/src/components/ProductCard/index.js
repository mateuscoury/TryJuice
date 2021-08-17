import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Context';
import {
  CardContainer,
  CardPrice,
  ImageContainer,
  ProductData,
  ProductName,
  QuantityControl,
  QuantityInput,
} from './Styled';

export default function ProductCard(props) {
  const {
    product: { id, name, price, urlImage },
  } = props;
  const { products, setProducts } = useContext(Context);
  const [productData, setProductData] = useState({
    id,
    name,
    price,
    quantity: 0,
  });

  useEffect(() => {
    const updatedProducts = products
      .map((product) => (product.id === id ? { ...product, ...productData } : product));
    setProducts(updatedProducts);
  }, [productData]);

  const incrementItem = () => {
    setProductData({
      ...productData,
      quantity: productData.quantity + 1,
    });
  };

  const decrementItem = () => {
    if (productData.quantity === 0) return;
    setProductData({
      ...productData,
      quantity: productData.quantity - 1,
    });
  };

  const handleQuantityChange = ({ target }) => {
    setProductData({
      ...productData,
      quantity: target.value,
    });
  };

  const handleModal = () => {
    props.setData({ id, name, price, urlImage });
    props.setVisible(true);
  };

  return (
    <CardContainer>
      <ProductName data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </ProductName>
      <ImageContainer type="button" onClick={ handleModal }>
        <img
          alt="Movie Cover"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
        />
      </ImageContainer>
      <CardPrice data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace(/\./, ',')}
      </CardPrice>
      <ProductData>

        <QuantityControl
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ decrementItem }
        >
          -
        </QuantityControl>
        <QuantityInput
          data-testid={ `customer_products__input-card-quantity-${id}` }
          placeholder="0"
          value={ productData.quantity }
          onChange={ handleQuantityChange }
        />
        <QuantityControl
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ incrementItem }
        >
          +
        </QuantityControl>
      </ProductData>
    </CardContainer>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
  setVisible: PropTypes.func.isRequired,
};
