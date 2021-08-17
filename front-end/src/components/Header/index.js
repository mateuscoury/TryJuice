import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';

import
{ Container,
  ProductsButton,
  OrdersButton,
  UserButton,
  LogoutButton,
  /* InvalidBox, */
} from './Styled';

export default function Header() {
  const history = useHistory();
  const { products, setProducts } = useContext(Context);
  const userName = JSON.parse(localStorage.getItem('user')).name;

  const logout = () => {
    localStorage.removeItem('user');
    const zeroQuantityProducts = products.map((product) => ({ ...product, quantity: 0 }));
    setProducts(zeroQuantityProducts);
    history.push('/login');
  };

  return (
    <Container>
      <ProductsButton
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        PRODUTOS
      </ProductsButton>
      <OrdersButton
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        MEUS PEDIDOS
      </OrdersButton>
      <UserButton
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userName }
      </UserButton>
      <LogoutButton
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logout }
      >
        SAIR
      </LogoutButton>
    </Container>
  );
}
