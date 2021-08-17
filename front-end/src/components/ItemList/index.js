import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerItem,
  ContainerDescription,
  ContainerQuantity,
  ContainerUnitValue,
  ContainerTotalValue,
  DeleteItem,
} from './Styled';
import { Context } from '../../Context';

export default function ItemList(props) {
  const { products, setProducts, totalPrice, setTotalPrice } = useContext(Context);
  const { item, description, quantity, unitaryValue, index, dataTestId } = props;
  const totalValue = quantity * parseFloat(unitaryValue);

  const removeItem = () => {
    const updatedProducts = products
      .map((product) => (product.id === item ? { ...product, quantity: 0 } : product));
    setProducts(updatedProducts);
    setTotalPrice(totalPrice - totalValue);
  };

  const renderDeleteButton = () => (
    <DeleteItem
      type="button"
      data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      onClick={ removeItem }
    >
      Remover
    </DeleteItem>
  );

  return (
    <Container>
      <ContainerItem
        data-testid={ `${dataTestId}__element-order-table-item-number-${index}` }
      >
        {` ${index + 1} `}
      </ContainerItem>
      <ContainerDescription
        data-testid={ `${dataTestId}__element-order-table-name-${index}` }
      >
        {` ${description} `}
      </ContainerDescription>
      <ContainerQuantity
        data-testid={ `${dataTestId}__element-order-table-quantity-${index}` }
      >
        {` ${quantity} `}
      </ContainerQuantity>
      <ContainerUnitValue
        data-testid={ `${dataTestId}__element-order-table-unit-price-${index}` }
      >
        {` ${unitaryValue.replace(/\./, ',')} `}
      </ContainerUnitValue>
      <ContainerTotalValue
        data-testid={ `${dataTestId}__element-order-table-sub-total-${index}` }
      >
        {` ${totalValue.toFixed(2).replace(/\./, ',')} `}
      </ContainerTotalValue>
      {dataTestId === 'customer_checkout' && renderDeleteButton()}
    </Container>
  );
}

ItemList.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitaryValue: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
