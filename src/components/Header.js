import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img
          src={
            "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          }
          alt="Amazon-logo"
        />
      </HeaderLogo>

      <HeaderOptionAddress>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineTwo>Select your address</OptionLineTwo>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 10px;
  }
`;

const HeaderOptionAddress = styled.div``;

const OptionLineOne = styled.p``;

const OptionLineTwo = styled.p``;

const HeaderSearch = styled.div``;

const HeaderSearchInput = styled.input``;

const HeaderSearchIconContainer = styled.div``;
