import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { db } from './firebase';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          product: doc.data(),
        };
      });

      setProducts(tempProducts);
    });
  };

  const [cartItems, setCartItems] = useState([]);
  const [cartProductNumber, setCartProductNumber] = useState(0);

  console.log(cartItems);

  const getItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempCartItems = [];
      let counter = 0;

      tempCartItems = snapshot.docs.map((doc) => {
        counter++;

        return {
          id: doc.id,
          cartItems: doc.data(),
        };
      });

      setCartItems(tempCartItems);
      setCartProductNumber(counter);
    });
  };

  useEffect(() => {
    getProducts();
    getItems();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/cart">
            <Header data={cartProductNumber} />
            <Cart cartItems={cartItems} cartProductNumber={cartProductNumber} />
            <Footer />
          </Route>

          <Route path="/">
            <Header data={cartProductNumber} />
            <Home data={products} />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
