import React from 'react';
import styled from 'styled-components';
import ProductCart from './ProductCart';

function ShoppingCart() {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </Container>
  );
}

export default ShoppingCart;

const Container = styled.div`
  flex: 4;
  min-height: 700px;
  background-color: #fff;
  margin-right: 10px;
  padding: 20px;
`;

const Title = styled.h1`
  padding-bottom: 15px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: 'Fira Sans';
  font-weight: 500;

  ::after {
    content: 'Price';
    position: absolute;
    bottom: 0;
    right: 0;
    color: rgba(0, 0, 0, 0.6);
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
