import React, { useContext } from 'react';
import { Context } from '../../Context';
import ItemList from '../ItemList';

import {
  Container,
  ContainerHeader,
  ContainerItem,
  ContainerDescription,
  ContainerQuantity,
  ContainerUnitValue,
  ContainerTotalValue,
  DeleteItem,
  Title,
  ContainerDiv,
  EmptyCart,
  TotalOrder,
} from './Styled';

export default function ProductsList() {
  const { products, totalPrice } = useContext(Context);
  const selectedProducts = products.filter((product) => product.quantity > 0);

  return (
    <Container>
      <Title>Finalizar Pedido</Title>
      <ContainerHeader>
        <ContainerItem>Item</ContainerItem>
        <ContainerDescription>Descrição</ContainerDescription>
        <ContainerQuantity>Quantidade</ContainerQuantity>
        <ContainerUnitValue>Valor Unitário</ContainerUnitValue>
        <ContainerTotalValue>Sub-total</ContainerTotalValue>
        <DeleteItem>Remover Item</DeleteItem>
      </ContainerHeader>
      <ContainerDiv>
        {selectedProducts.length > 0 ? (
          selectedProducts.map((item, index) => (
            <ItemList
              key={ index }
              item={ item.id }
              description={ item.name }
              quantity={ item.quantity }
              unitaryValue={ item.price }
              index={ index }
              dataTestId="customer_checkout"
            />
          ))
        ) : (
          <EmptyCart>Não há produtos no carrinho</EmptyCart>
        )}
        <TotalOrder>
          Total: R$
          <span data-testid="customer_checkout__element-order-total-price">
            {totalPrice.toFixed(2).replace(/\./, ',')}
          </span>
        </TotalOrder>
      </ContainerDiv>
    </Container>
  );
}
