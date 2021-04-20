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
  padding: 20px 0;
`;

const ProductImage = styled.img`
  max-height: 200px;
`;

const ProductInfo = styled.div``;

const ProductName = styled.h1``;

const ProductPrice = styled.h1``;
