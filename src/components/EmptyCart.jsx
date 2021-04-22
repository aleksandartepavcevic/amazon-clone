import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function EmptyCart() {
  return (
    <Container>
      <EmptyCartImage
        src={
          'https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'
        }
      />
      <Content>
        <Text>Your Amazon Cart is empty</Text>
        <Link style={{ textDecoration: 'none' }} to="/">
          <MinorText>Shop today's deals</MinorText>
        </Link>
        <ButtonContainer>
          <SignIn>Sign in to your account</SignIn>
          <SignUp>Sign up now</SignUp>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default EmptyCart;

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 985px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 985px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
  }
`;

const Text = styled.h1`
  font-family: 'Fira Sans';
  font-weight: 600;
  font-size: 2.4rem;

  @media only screen and (max-width: 400px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const MinorText = styled.p`
  color: #007185;
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 20px;

  :hover {
    text-decoration: underline;
  }
`;

const EmptyCartImage = styled.img`
  max-width: 400px;
  object-fit: contain;

  @media only screen and (max-width: 985px) {
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 985px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const SignIn = styled.button`
  border: solid 1px #fcd200;
  border-radius: 6px;
  background-color: #ffd814;
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0.5em 0.8em;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #febd69;
    transition: background-color 200ms ease-in-out;
  }
`;

const SignUp = styled.button`
  margin-left: 10px;
  border: solid 1px #d5d9d9;
  border-radius: 6px;
  background-color: #fff;
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0.5em 0.8em;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #f7fafd;
    transition: background-color 200ms ease-in-out;
  }

  @media only screen and (max-width: 985px) {
    margin: 0;
    margin-top: 10px;
  }
`;
