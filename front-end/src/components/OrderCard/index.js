import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import OrderCardStatus from '../OrderCardStatus';
import {
  OrderAddress,
  OrderContainer,
  OrderData,
  OrderDetails,
  OrderDetailsInfo,
  OrderGeneral,
  OrderId,
  OrderIdContainer,
} from './Styled';

const renderAddress = (id, address, number) => (
  <OrderAddress data-testid={ `seller_orders__element-card-address-${id}` }>
    {`${address}, ${number}`}
  </OrderAddress>
);

const formatDate = (date) => {
  const [month, day, year] = new Date(date).toLocaleDateString().split('/');
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

export default function OrderCard({ orderData, isSeller }) {
  const history = useHistory();
  const TARGET_LENGTH = 4;
  const prefix = isSeller ? 'seller_orders__element-' : 'customer_orders__element-';

  const redirect = () => (isSeller
    ? history.push(`/seller/orders/${orderData.id}`)
    : history.push(`/customer/orders/${orderData.id}`));

  return (
    <OrderContainer
      onClick={ redirect }
    >
      <OrderIdContainer>
        <p>Pedido</p>
        <OrderId
          data-testid={ `${prefix}order-id-${orderData.id}` }
        >
          {orderData.id.toString().padStart(TARGET_LENGTH, '0')}
        </OrderId>
      </OrderIdContainer>
      <OrderGeneral>
        <OrderData>
          <OrderCardStatus
            status={ orderData.status }
            id={ orderData.id }
            prefix={ prefix }
          />
          <OrderDetails>
            <OrderDetailsInfo
              data-testid={ `${prefix}order-date-${orderData.id}` }
            >
              {formatDate(orderData.sale_date)}
            </OrderDetailsInfo>
            <OrderDetailsInfo
              data-testid={ `${prefix}card-price-${orderData.id}` }
            >
              {orderData.total_price.replace(/\./, ',')}
            </OrderDetailsInfo>
          </OrderDetails>
        </OrderData>
        {isSeller
          && renderAddress(
            orderData.id,
            orderData.delivery_address,
            orderData.delivery_number,
          )}
      </OrderGeneral>
    </OrderContainer>
  );
}

OrderCard.propTypes = {
  orderData: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    seller_id: PropTypes.number,
    total_price: PropTypes.string,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  isSeller: PropTypes.bool,
};

OrderCard.defaultProps = {
  isSeller: false,
};
