import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';

function Product({ data }) {
  return (
    <Container>
      <ImageContainer>
        <ProductImage src={data.product.image} />
      </ImageContainer>

      <ProductInfo>
        <div style={{ minWidth: 200 }}>
          <ProductName>{data.product.name}</ProductName>

          <ProductPrice>${data.product.price}</ProductPrice>

          <ProductShipping>Ships to United States</ProductShipping>
        </div>

        <AddToCart id={data.id} productData={data.product} />
      </ProductInfo>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  z-index: 100;
  display: flex;
  flex: 1;

  @media only screen and (max-width: 565px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 565px) {
    display: flex;
    justify-content: center;
    margin: 0 0 20px 0;
  }
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.h1`
  font-weight: 400;
  margin-bottom: 10px;
  font-family: 'Fira Sans';
`;

const ProductPrice = styled.h1`
  font-family: 'Fira Sans';
  font-weight: 400;
  position: relative;
`;

const ProductShipping = styled.p`
  font-family: 'Fira Sans';
  font-weight: 400;
  margin-top: 5px;

  @media only screen and (max-width: 565px) {
    margin-bottom: 15px;
  }
`;
