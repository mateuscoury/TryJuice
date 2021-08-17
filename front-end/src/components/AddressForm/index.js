import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../Apis/api1';
import { Context } from '../../Context';

import
{ Container,
  Form,
  ContainerDiv,
  Paragraph,
  Title,
  ContainerLabel,
  ContainerAddress,
  ContainerNumber,
  ContainerSelect,
  FinalizeOrder,
} from './Styled';

export default function AddressForm() {
  const { products } = useContext(Context);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState({});
  const [message, setMessage] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    number: '',
  });
  const { totalPrice } = useContext(Context);
  const history = useHistory();
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => api.getAllSellers().then((response) => {
    setSellers([{ id: 0, name: 'Vendedor(a)' }, ...response]);
  }), []);

  const handleAddress = ({ target: { name, value } }) => {
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleClick = async () => {
    if (!parseInt(selectedSeller, 10)) return;
    const sale = {
      deliveryAddress: address.street,
      deliveryNumber: address.number,
      totalPrice,
      sellerId: parseInt(selectedSeller, 10),
      status: 'Pendente',
      products: products.filter((product) => product.quantity > 0),
    };
    const apiResponse = await api.registerSale(sale, token);
    setMessage(true);
    history.push(`/customer/orders/${apiResponse.data.response.id}`);
  };

  const handleSellerChange = ({ target }) => {
    setSelectedSeller(target.value);
  };

  return (
    <Container>
      <Form>
        <ContainerDiv>
          <Title>Detalhes e Endereço para Entrega</Title>
          <Paragraph>P. Vendedora Responsável</Paragraph>
          <ContainerLabel htmlFor="sellers">
            <ContainerSelect
              id="sellers"
              name="sellers"
              data-testid="customer_checkout__select-seller"
              onChange={ handleSellerChange }
            >
              { sellers.map((seller, index) => (
                <option
                  key={ index }
                  value={ seller.id }
                  selected={ !index }
                  disabled={ !index }
                >
                  { seller.name }
                </option>
              )) }
            </ContainerSelect>
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Endereço</Paragraph>
          <ContainerLabel htmlFor="street">
            <ContainerAddress
              data-testid="customer_checkout__input-address"
              type="text"
              id="street"
              name="street"
              value={ address.street }
              onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <ContainerDiv>
          <Paragraph>Número</Paragraph>
          <ContainerLabel htmlFor="number">
            <ContainerNumber
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              id="number"
              name="number"
              value={ address.number }
              onChange={ handleAddress }
            />
          </ContainerLabel>
        </ContainerDiv>
        <FinalizeOrder
          data-testid="customer_checkout__button-submit-order"
          type="button"
          disabled={ address.street === '' || address.number === '' }
          onClick={ handleClick }
        >
          FINALIZAR PEDIDO
        </FinalizeOrder>
        { message ? <h3>Compra realizada com sucesso!</h3> : '' }
      </Form>
    </Container>
  );
}
