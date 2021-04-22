import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { db } from './firebase';

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
        <Header data={cartProductNumber} />

        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} cartProductNumber={cartProductNumber} />
          </Route>

          <Route path="/">
            <Home data={products} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
