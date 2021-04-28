import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

function Cart({ cartItems, cartProductNumber }) {
  const [price, setPrice] = useState(0);
  const totalPrice = () => {
    let total = 0;
    cartItems.length !== 0
      ? cartItems.map((item) => {
          total = total + item.cartItems.price;
          return setPrice(total);
        })
      : setPrice(total);
  };

  useEffect(() => {
    totalPrice();
  }, [cartItems.length]);

  return (
    <Container>
      <InnerContainer>
        <ShoppingCart cartItems={cartItems} />
        <Checkout cartProductNumber={cartProductNumber} totalPrice={price} />
      </InnerContainer>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  background-color: #ddd;
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 20px;
  min-height: 600px;
  max-width: 1500px;
  margin: 0 auto;

  @media only screen and (max-width: 775px) {
    flex-direction: column;
    min-height: unset;
  }
`;
