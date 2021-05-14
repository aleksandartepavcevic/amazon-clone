import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const createAccount = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((result) => {
        result.user.updateProfile({
          displayName: userName,
        });
      })
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setUserName('');
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
          <h1>Create account</h1>

          <form onSubmit={createAccount}>
            <label>Your name</label>
            <Input
              value={userName}
              type="text"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <Submit type="submit" value="Create your Amazon account" />
          </form>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </SignInContainer>
      </InnerContainer>
    </Container>
  );
};

export default Signup;

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
