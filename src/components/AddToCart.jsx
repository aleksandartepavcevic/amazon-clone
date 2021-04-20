import React from 'react';
import styled from 'styled-components';

function AddToCart() {
  return <Button>Add to cart</Button>;
}

export default AddToCart;

const Button = styled.button`
  border: solid 1px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  background-color: #febd69;
  font-family: 'Fira Sans';
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.6em 1em;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #f90;
    transition: background-color 200ms ease-in-out;
  }
`;
