import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={'http://pngimg.com/uploads/amazon/amazon_PNG6.png'} />
      </Link>

      <div style={{ position: 'relative' }}>
        <SignInContainer>
          <h1>Sign-In</h1>

          <form>
            <label>Email or mobile phone number</label>
            <input />
            <button>Continue</button>
          </form>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </SignInContainer>

        <AmazonText>New to Amazon?</AmazonText>
        <Line />
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

const Logo = styled.img`
  max-width: 100px;
  max-height: 40px;
`;

const SignInContainer = styled.div`
  min-height: 250px;
  max-width: 350px;
  border: solid 1px #ddd;
  border-radius: 5px;
  padding: 2.5rem;
  margin-top: 2rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.2rem;
      font-weight: 500;
      font-family: 'Fira Sans', sans-serif;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.5rem;
      border: solid 1px #aaa;
      border-radius: 3px;
      font-family: 'Fira Sans', sans-serif;

      :active,
      :focus {
        outline-color: orange;
      }
    }

    button {
      margin: 1rem 0 2.5rem 0;
      border: none;
      border-radius: 3px;
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
    }
  }

  p {
    font-family: 'Fira Sans';
    line-height: 15px;
  }
`;

const AmazonText = styled.p`
  width: 100px;
  text-align: center;
  margin: 2rem auto 1rem auto;
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  color: #6d6d6d;
  position: relative;
  background-color: white;
  z-index: 1000;
`;

const Line = styled.div`
  height: 1px;
  background-color: #ddd;
  position: absolute;
  bottom: 1.6rem;
  left: 0;
  right: 0;
  z-index: 1;
`;