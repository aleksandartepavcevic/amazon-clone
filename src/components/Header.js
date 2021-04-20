import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
  return (
    <Container>
      <ContainerDiv>
        <HeaderLogo>
          <img
            src={
              'https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png'
            }
            alt="Amazon-logo"
          />
        </HeaderLogo>

        <HeaderOptionAddress>
          <LocationOnIcon />
          <div>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select your address</OptionLineTwo>
          </div>
        </HeaderOptionAddress>
      </ContainerDiv>

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
          <ShoppingCartIcon />
          <ShoppingCartItems>0</ShoppingCartItems>
        </HeaderOrdersCart>
      </ContainerDiv>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.4rem;
  padding: 10px;
`;

const ContainerDiv = styled.div`
  height: 100%;
  display: flex;
`;

const HeaderLogo = styled.div`
  padding: 0 15px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    width: 100px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const HeaderOptionAddress = styled.div`
  padding: 0 15px 0 10px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`;

const HeaderSearch = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  height: 40px;
  flex-grow: 1;
  border-radius: 3px;
  overflow: hidden;

  :focus-within {
    box-shadow: 0 0 2px 3px #f90;
    z-index: 1;
  }
`;

const HeaderSearchInput = styled.input`
  height: 100%;
  flex-grow: 1;
  min-width: 200px;
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

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px #fff;
  }
`;

const HeaderOrdersCart = styled.div`
  padding: 0 15px;
  display: flex;
  aligh-items: center;

  svg {
    height: 100%;
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

const ShoppingCartItems = styled.p`
  font-weight: 500;
  display: flex;
  align-items: center;
`;
