import React from 'react';
import styled from 'styled-components';

function ProductCart() {
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <ProductImage src="https://images-na.ssl-images-amazon.com/images/I/719UcXKzXHL._AC_SL1500_.jpg" />

        <ProductInfo>
          <ProductName>
            New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (Latest
            Model, 4th Generation)
          </ProductName>

          <InStock>In stock</InStock>

          <Style>
            <Color>Color:</Color>
            <Span>Black</Span>
          </Style>

          <Quantity>
            <select>
              <option>Qty: 1</option>
              <option>Qty: 2</option>
              <option>Qty: 3</option>
              <option>Qty: 4</option>
            </select>
          </Quantity>
        </ProductInfo>
      </div>

      <ProductPrice>$558.00</ProductPrice>
    </Container>
  );
}

export default ProductCart;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  :not(:last-of-type) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
  }

  :last-of-type {
    padding-top: 20px;
  }
`;

const ProductImage = styled.img`
  max-height: 200px;
  margin-right: 20px;
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

const Quantity = styled.div`
  margin-top: 10px;
`;
