import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

const Signup = () => {
  const [newAcc, setNewAcc] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const name = React.createRef();
  const email = React.createRef();
  const pass = React.createRef();
  const rePass = React.createRef();

  useEffect(() => {
    checkProperties(newAcc) === false && createAccount();
  }, [newAcc]);

  const checkProperties = (obj) => {
    for (let key in obj) {
      if (obj[key] === '') {
        return true;
      } else return false;
    }
  };

  const getAccInfo = (event) => {
    event.preventDefault();
    pass.current.value === rePass.current.value
      ? setNewAcc((prevState) => {
          return {
            ...prevState,
            name: name.current.value,
            email: email.current.value,
            password: pass.current.value,
            rePassword: rePass.current.value,
          };
        })
      : window.alert(`Password doesn't match.`);
  };

  const createAccount = () => {
    // db.collection('accounts').onSnapshot((snapshot) => {
    //   snapshot.docs.map((doc) => {
    //     newAcc.email === doc.data().email && window.alert('postoji acc');
    //   });
    // });

    db.collection('accounts')
      .add({
        ...newAcc,
      })
      .then(() => {
        console.log('Account successfully added!');
      })
      .catch((error) => {
        console.error('Error adding account: ', error);
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

          <form onSubmit={getAccInfo}>
            <label>Your name</label>
            <Input ref={name} type="text" required />
            <label>Email</label>
            <Input ref={email} type="email" required />
            <label>Password</label>
            <Password ref={pass} type="password" required />
            <label>Re-enter password</label>
            <Password ref={rePass} type="password" required />
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
