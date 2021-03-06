import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function ProductCart({ item }) {
  const { id, cartItems } = item;
  const removeFromCart = () => {
    db.collection('cartItems')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Product successfully removed from the cart.');
      })
      .catch((error) => {
        console.error('Unable to remove product from the cart.');
      });
  };

  return (
    <Container>
      <ProductContainer>
        <ImageContainer>
          <ProductImage src={cartItems.image} />
        </ImageContainer>

        <ProductInfo>
          <ProductName>{cartItems.name}</ProductName>

          <ProductPriceMobile>
            <span>Price:</span> ${cartItems.price}
          </ProductPriceMobile>

          <InStock>In stock</InStock>

          <Style>
            <Color>Color:</Color>
            <Span>Black</Span>
          </Style>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
            <Quantity>
              <select>
                <option>Qty: 1</option>
                <option>Qty: 2</option>
                <option>Qty: 3</option>
                <option>Qty: 4</option>
              </select>
            </Quantity>

            <Delete onClick={removeFromCart}>Delete</Delete>
          </div>
        </ProductInfo>
      </ProductContainer>

      <ProductPrice>${cartItems.price}</ProductPrice>
    </Container>
  );
}

export default ProductCart;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 775px) {
    display: block;
  }

  :not(:last-of-type) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
  }

  :last-of-type {
    padding-top: 20px;
  }
`;

const ProductContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 775px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-right: 20px;

  @media only screen and (max-width: 775px) {
    margin-right: 0;
  }
`;

const ProductInfo = styled.div``;

const ProductName = styled.h1`
  font-family: 'Fira Sans';
  font-weight: 400;
  margin-bottom: 10px;
`;

const ProductPrice = styled.h1`
  font-family: 'Fira Sans';
  font-weight: 600;
  margin-left: 20px;

  @media only screen and (max-width: 775px) {
    display: none;
  }
`;

const ProductPriceMobile = styled.h2`
  font-family: 'Fira Sans';
  font-weight: 600;
  margin-bottom: 10px;
  display: none;

  @media only screen and (max-width: 775px) {
    display: block;
  }

  span {
    font-weight: 400;
    margin-right: 5px;
  }
`;

const InStock = styled.p`
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  color: green;
  margin-bottom: 5px;
`;

const Style = styled.div`
  display: flex;
`;

const Color = styled.p`
  font-family: 'Fira Sans';
  font-size: 1.2rem;
  margin-right: 3px;
  font-weight: 600;
`;

const Span = styled.p`
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Quantity = styled.div``;

const Delete = styled.h3`
  color: #007185;
  margin-left: 15px;
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
