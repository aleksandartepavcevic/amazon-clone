import React from 'react';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

function Cart() {
  return (
    <Container>
      <ShoppingCart />
      <Checkout />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  background-color: #ddd;
  padding: 20px;
`;
