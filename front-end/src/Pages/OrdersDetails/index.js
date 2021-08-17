import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Header, ItemList } from '../../components';
import api from '../../Apis/api1';
import { TotalOrder } from '../../components/ProductsList/Styled';
import { Context } from '../../Context';
import {
  Container,
  ProductsCustomerContainer,
  HeaderOrderStatus,
  BodyItensOrders,
  HeaderTitle,
  DeliveredCheckButton,
} from './Styled';

const TARGET_LENGTH = 4;
const DATATESTID = 'customer_order_details';

const formatDate = (date) => {
  const [month, day, year] = new Date(date).toLocaleDateString().split('/');
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

const OrdersDetails = ({ match }) => {
  const { client } = useContext(Context);
  const { id } = match.params;
  const [sale, setSale] = useState({});
  const [seller, setSeller] = useState({});
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getData = async () => {
      const saleData = await api.getSaleById(id, token);
      setSale(saleData.data.response);
      const sellerData = await api.getUserById(
        saleData.data.response.seller_id,
        token,
      );
      setSeller(sellerData.data.response);
    };
    getData();
  }, [id, token]);

  useEffect(() => {
    client.on(
      'changeStatus',
      ({ id: saleId, status }) => saleId === sale.id && setSale({ ...sale, status }),
    );
  }, [client, sale]);

  const handleClickChangeStatus = (status) => {
    setSale({
      ...sale,
      status,
    });
    const { products, ...updatedSale } = sale;
    client.emit('changeStatus', {
      ...updatedSale,
      status,
    });
  };

  if (!Object.keys(sale).length || !Object.keys(seller).length) return <p />;

  return (
    <Container>
      <Header />
      <ProductsCustomerContainer>
        <HeaderTitle>Detalhes do Pedido</HeaderTitle>
        <HeaderOrderStatus>
          <span
            data-testid={ `${DATATESTID}__element-order-details-label-order-id` }
          >
            {sale.id.toString().padStart(TARGET_LENGTH, '0')}
          </span>
          <span
            data-testid={ `${DATATESTID}__element-order-details-label-seller-name` }
          >
            {seller.name}
          </span>
          <span
            data-testid={ `${DATATESTID}__element-order-details-label-order-date` }
          >
            {formatDate(sale.sale_date)}
          </span>
          <span
            data-testid={ `${DATATESTID}__element-order-details-label-delivery-status` }
          >
            {sale.status}
          </span>
          <DeliveredCheckButton
            type="button"
            disabled={ sale.status !== 'Em Trânsito' }
            data-testid={ `${DATATESTID}__button-delivery-check` }
            onClick={ () => handleClickChangeStatus('Entregue') }
          >
            Marcar como entregue
          </DeliveredCheckButton>
        </HeaderOrderStatus>
        <BodyItensOrders>
          {sale.products.length > 0 ? (
            sale.products.map((item, index) => (
              <ItemList
                key={ index }
                item={ item.id }
                description={ item.name }
                quantity={ item.salesProduct.quantity }
                unitaryValue={ item.price }
                index={ index }
                dataTestId={ DATATESTID }
              />
            ))
          ) : (
            <h2>Não há produtos no carrinho</h2>
          )}
          <TotalOrder>
            Total: R$
            <span data-testid={ `${DATATESTID}__element-order-total-price` }>
              {sale.total_price.replace(/\./, ',')}
            </span>
          </TotalOrder>
        </BodyItensOrders>
      </ProductsCustomerContainer>
    </Container>
  );
};

export default OrdersDetails;

OrdersDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
