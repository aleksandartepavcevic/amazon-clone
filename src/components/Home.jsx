import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
  return (
    <div style={{ backgroundColor: '#ddd', paddingBottom: 10 }}>
      <Container>
        <Banner />

        <Content>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Content>
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  min-height: 600px;
  background: url('https://i.imgur.com/SYHeuYM.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  margin: -300px 10px 0 10px;
  display: flex;
  flex-wrap: wrap;
`;
