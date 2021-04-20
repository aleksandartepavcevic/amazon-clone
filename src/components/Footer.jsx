import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <div>
      <Container>
        <Section>
          <Heading>Get to Know Us</Heading>
          <Text>Careers</Text>
          <Text>Blog</Text>
          <Text>About Amazon</Text>
          <Text>Amazon Devices</Text>
          <Text>Amazon Tours</Text>
        </Section>

        <Section>
          <Heading>Make Money with Us</Heading>
          <Text>Sell products on Amazon</Text>
          <Text>Sell on Amazon Business</Text>
          <Text>Sell apps on Amazon</Text>
          <Text>Become an Affiliate</Text>
          <Text>Advertise Your Products</Text>
          <Text>Self-Publish with Us</Text>
          <Text>Host an Amazon Hub</Text>
        </Section>

        <Section>
          <Heading>Amazon Payment Products</Heading>
          <Text>Amazon Business Card</Text>
          <Text>Shop with Points</Text>
          <Text>Reload Your Balance</Text>
          <Text>Amazon Currency Converter</Text>
        </Section>

        <Section>
          <Heading>Let Us Help You</Heading>
          <Text>Your Account</Text>
          <Text>Your Orders</Text>
          <Text>Shipping Rates & Policies</Text>
          <Text>Returns & Replacements</Text>
          <Text>Amazon Assistant</Text>
        </Section>
      </Container>

      <SubFooter>
        <Logo
          src={
            'https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png'
          }
        />
      </SubFooter>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  background-color: #232f3e;
  display: flex;
  justify-content: center;
  padding: 70px 0;
`;

const Section = styled.div`
  padding: 0 60px;
`;

const Heading = styled.h2`
  font-family: 'Fira Sans';
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
`;

const Text = styled.h3`
  font-family: 'Fira Sans';
  font-weight: 300;
  color: #ccc;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const SubFooter = styled.div`
  background-color: #232f3e;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const Logo = styled.img`
  max-width: 100px;
`;
