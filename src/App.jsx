import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
