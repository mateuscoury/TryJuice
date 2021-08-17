import React from 'react';
import PropTypes from 'prop-types';
import OrderStatus from './Styled';

const defineBgColor = (status) => {
  const lowerCaseStatus = status.toLowerCase();
  if (lowerCaseStatus === 'preparando') {
    return '#66CC00';
  }
  if (lowerCaseStatus === 'pendente') {
    return '#CCB800';
  }
  return '#00CC9B';
};

const OrderCardStatus = ({ id, status, prefix }) => {
  const color = defineBgColor(status);

  return (
    <OrderStatus
      data-testid={ `${prefix}delivery-status-${id}` }
      bgColor={ color }
    >
      {status}
    </OrderStatus>
  );
};

export default OrderCardStatus;

OrderCardStatus.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
};
