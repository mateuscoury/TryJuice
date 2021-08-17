import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerItem,
  ContainerDescription,
  ContainerQuantity,
  ContainerUnitValue,
  ContainerTotalValue,
} from './Styled';

export default function ItemListOrderSeller(props) {
  const { description, quantity, unitaryValue, index, dataTestId } = props;
  const totalValue = quantity * parseFloat(unitaryValue);

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
    </Container>
  );
}

ItemListOrderSeller.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitaryValue: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
