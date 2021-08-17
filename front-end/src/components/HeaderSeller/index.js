import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';

import
{ Container,
  RigthButtons,
  OrdersButton,
  UserButton,
  LogoutButton,
} from './Styled';

export default function HeaderSeller() {
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
      <OrdersButton
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/seller/orders') }
      >
        PEDIDOS
      </OrdersButton>
      <RigthButtons>
        <UserButton
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          // onClick={ () => history.push('/user') }
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
      </RigthButtons>
    </Container>
  );
}
