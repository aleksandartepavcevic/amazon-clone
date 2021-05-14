import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const LoginToAccount = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setUserEmail('');
        setUserPassword('');
        setError(error.message);
      });
  };

  return (
    <Container>
      <Link to="/">
        <Logo src={'http://pngimg.com/uploads/amazon/amazon_PNG6.png'} />
      </Link>

      <InnerContainer>
        <SignInContainer>
          <form onSubmit={LoginToAccount}>
            <h1>Sign-In</h1>

            <label>Email</label>
            <Input
              value={userEmail}
              type="email"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label>Password</label>
            <Password
              value={userPassword}
              type="password"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
            {error && <Error>{error}</Error>}
            <Submit type="submit" value="Login to your Amazon account" />
          </form>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </SignInContainer>

        <div style={{ position: 'relative' }}>
          <AmazonText>New to Amazon?</AmazonText>
          <Line />
        </div>

        <Link to="/signup">
          <CreateYourAccount>Create your Amazon account</CreateYourAccount>
        </Link>
      </InnerContainer>
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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const CreateYourAccount = styled.button`
  width: 100%;
  margin-top: 1rem;
  border: none;
  border-radius: 3px;
  background-color: #d6d6d6;
  font-family: 'Fira Sans';
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0.5em 0.8em;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: #b1b1b1;
    transition: background-color 200ms ease-in-out;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: solid 1px #aaa;
  border-radius: 3px;
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 1rem;

  :active,
  :focus {
    outline-color: orange;
  }
`;

const Password = styled.input`
  padding: 0.5rem;
  border: solid 1px #aaa;
  border-radius: 3px;
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 1rem;

  :active,
  :focus {
    outline-color: orange;
  }
`;

const Submit = styled.input`
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
`;

const Error = styled.p`
  font-family: 'Fira Sans';
  font-weight: 500;
  font-size: 1.1rem;
  color: red;
`;
