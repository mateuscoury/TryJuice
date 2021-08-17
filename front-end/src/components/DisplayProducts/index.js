import React, { useContext, useState } from 'react';
import ProductCard from '../ProductCard';
import { Context } from '../../Context';
import TotalPrice from '../TotalPrice';
import Modal from '../Modal';
import ProductsContainer from './styled';

export default function DisplayProducts() {
  const { products } = useContext(Context);
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <ProductsContainer id="gridContainer">
        {
          products.map((product) => (
            <ProductCard
              setData={ setData }
              setVisible={ setVisible }
              key={ product.id }
              product={ product }
            />
          ))
        }
      </ProductsContainer>
      <TotalPrice />
      {visible && <Modal setVisible={ setVisible } data={ data } />}

    </div>
  );
}
