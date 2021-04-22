import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function AddToCart({ id, productData }) {
  const addToCart = () => {
    const cartItem = db.collection('cartItems').doc(id);
    cartItem
      .get()
      .then((doc) => {
        if (doc.exists) {
          cartItem.update({
            quantity: doc.data().quantity + 1,
          });
        } else {
          db.collection('cartItems').doc(id).set({
            image: productData.image,
            name: productData.name,
            price: productData.price,
            quantity: 1,
          });
        }
      })
      .catch((error) => {
        console.error('Unable to add product to the cart.');
      });
  };

  return (
    <Button id={id} onClick={addToCart}>
      Add to cart
    </Button>
  );
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
