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

          <ProductPrice>
            {/* <PriceSymbol>$</PriceSymbol>
            <PriceWhole>558</PriceWhole>
            <PriceFraction>00</PriceFraction> */}
            ${data.product.price}
          </ProductPrice>

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
`;

const ImageContainer = styled.div``;

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
  margin-left: 6px;
`;

const PriceSymbol = styled.span`
  font-size: 1rem;
  position: absolute;
  top: 5px;
  left: -6px;
`;

const PriceWhole = styled.span`
  font-weight: 500;
  margin: 0 1px;
`;

const PriceFraction = styled.span`
  font-size: 1rem;
  position: absolute;
  top: 4px;
`;

const ProductShipping = styled.p`
  font-family: 'Fira Sans';
  font-weight: 400;
  margin-top: 5px;
`;
