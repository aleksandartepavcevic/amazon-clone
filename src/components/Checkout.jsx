import React from 'react';
import styled from 'styled-components';

function Checkout({ cartProductNumber, totalPrice }) {
  return (
    <Container>
      <h1>
        Subtotal ({cartProductNumber} items): <span>${totalPrice}</span>
      </h1>

      <ProceedToCheckout>Proceed to checkout</ProceedToCheckout>
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  flex: 1;
  height: 0%;
  background-color: #fff;
  padding: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 775px) {
    margin: 20px 0 0 0;
    justify-content: center;
  }

  h1 {
    font-family: 'Fira Sans';
    font-weight: 400;

    span {
      font-weight: 700;
      margin-left: 5px;
    }
  }
`;

const ProceedToCheckout = styled.button`
  margin-top: 20px;
  border: solid 1px #fcd200;
  border-radius: 3px;
  background-color: #ffd814;
  font-family: 'Fira Sans';
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.6em 1em;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #febd69;
    transition: background-color 200ms ease-in-out;
  }
`;
