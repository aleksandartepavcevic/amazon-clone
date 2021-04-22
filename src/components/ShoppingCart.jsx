import React from 'react';
import styled from 'styled-components';
import ProductCart from './ProductCart';

function ShoppingCart({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      {cartItems.length != 0 ? (
        cartItems.map((item) => <ProductCart item={item} />)
      ) : (
        <Text>You have not added any products to the cart.</Text>
      )}
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

const Text = styled.h2`
  font-family: 'Fira Sans';
  font-weight: 400;
  margin-top: 20px;
`;
