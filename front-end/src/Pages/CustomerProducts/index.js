import React from 'react';
import {
  Header,
  DisplayProducts,
} from '../../components';
import ProductsCustomer from './Styled';

const CustomerProducts = () => (
  <ProductsCustomer>
    <Header />
    <DisplayProducts />
  </ProductsCustomer>
);

export default CustomerProducts;
