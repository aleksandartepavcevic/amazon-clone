import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header({ data }) {
  return (
    <Container>
      <ContainerDiv>
        <HeaderLogo>
          <Link to="/">
            <img
              src={
                'https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png'
              }
              alt="Amazon-logo"
            />
          </Link>
        </HeaderLogo>

        <MobileCart>
          <Link to="/cart">
            <ShoppingCartIcon />
            <ShoppingCartItems>{data}</ShoppingCartItems>
          </Link>
        </MobileCart>
      </ContainerDiv>

      <HeaderOptionAddress>
        <LocationOnIcon />
        <div>
          <OptionLineOne>Deliver to</OptionLineOne>
          <OptionLineTwo>United States</OptionLineTwo>
        </div>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <ContainerDiv>
        <HeaderAccount>
          <OptionLineOne>Hello, Aleksandar</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderAccount>

        <HeaderOrders>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOrders>

        <HeaderOrdersCart>
          <Link to="/cart">
            <ShoppingCartIcon />
            <ShoppingCartItems>{data}</ShoppingCartItems>
          </Link>
        </HeaderOrdersCart>
      </ContainerDiv>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #0f1111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.4rem;
  padding: 10px;

  @media only screen and (max-width: 840px) {
    flex-direction: column;
    align-items: unset;
    padding: 10px 0px;
  }
`;

const ContainerDiv = styled.div`
  height: 100%;
  display: flex;

  @media only screen and (max-width: 840px) {
    justify-content: space-between;
    order: 0;
    margin-bottom: 10px;
  }
`;

const HeaderLogo = styled.div`
  padding: 5px 15px 0 15px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 840px) {
    padding: 5px 10px 0 10px;
  }

  img {
    width: 100px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const MobileCart = styled.div`
  display: none;
  padding: 0 15px;
  aligh-items: center;
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    display: flex;
  }

  a {
    display: flex;
    aligh-items: center;
    color: white;
    text-decoration: none;
  }

  svg {
    height: 100%;
    font-size: 2.5rem;
    margin-right: 5px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const HeaderOptionAddress = styled.div`
  padding: 0 15px 0 10px;
  display: flex;

  @media only screen and (max-width: 840px) {
    order: 2;
    margin-top: 10px;
    padding: 0 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 840px) {
      flex-direction: row;
      align-items: center;
    }
  }

  svg {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    margin-right: 5px;
  }

  border-radius: 3px;
  overflow: hidden;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const OptionLineOne = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
`;

const OptionLineTwo = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Fira Sans', sans-serif;

  @media only screen and (max-width: 840px) {
    margin-left: 5px;
    font-size: 1.2rem;
  }
`;

const HeaderSearch = styled.div`
  min-width: 200px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  height: 40px;
  flex-grow: 1;
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    order: 1;
    margin: 0 10px;
  }

  :focus-within {
    box-shadow: 0 0 2px 3px #f90;
    z-index: 1;
  }
`;

const HeaderSearchInput = styled.input`
  height: 100%;
  flex-grow: 1;

  border: 0;
  outline: none;
  padding: 0 10px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
`;

const HeaderSearchIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #febd69;
  width: 40px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #f90;
    transition: background-color 200ms ease-in-out;
  }

  svg {
    font-size: 2.5rem;
    color: black;
  }
`;

const HeaderAccount = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    display: none;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const HeaderOrders = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    display: none;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const HeaderOrdersCart = styled.div`
  padding: 0 15px;
  display: flex;
  aligh-items: center;
  border-radius: 3px;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    display: none;
  }

  a {
    display: flex;
    aligh-items: center;
    color: white;
    text-decoration: none;
  }

  svg {
    height: 100%;
    font-size: 2.5rem;
    margin-right: 5px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const ShoppingCartItems = styled.p`
  color: #febd69;
  font-family: 'Fira Sans';
  font-weight: 500;
  display: flex;
  align-items: center;
`;
