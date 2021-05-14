import React from 'react';
import styled from 'styled-components';
import ProductCart from './ProductCart';
import EmptyCart from './EmptyCart';

function ShoppingCart({ cartItems }) {
  return (
    <Container>
      {cartItems.length !== 0 ? (
        <div>
          <Title>Shopping Cart</Title>

          {cartItems.map((item) => (
            <ProductCart item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
}

export default ShoppingCart;

const Container = styled.div`
  height: 0%;
  flex: 4;
  background-color: #fff;
  margin-right: 10px;
  padding: 20px;

  @media only screen and (max-width: 775px) {
    margin: 0;
  }
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

    @media only screen and (max-width: 430px) {
      content: '';
    }
  }
`;
