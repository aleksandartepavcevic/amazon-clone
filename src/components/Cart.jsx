import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import { db } from '../firebase';

function Cart({ cartItems, cartProductNumber }) {
  const [price, setPrice] = useState(0);
  const totalPrice = () => {
    let total = 0;
    cartItems.length != 0
      ? cartItems.map((item) => {
          total = total + item.cartItems.price;
          setPrice(total);
        })
      : setPrice(total);
  };

  useEffect(() => {
    totalPrice();
  }, [cartItems.length]);

  return (
    <Container>
      <ShoppingCart cartItems={cartItems} />
      <Checkout cartProductNumber={cartProductNumber} totalPrice={price} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  background-color: #ddd;
  padding: 20px;
`;
