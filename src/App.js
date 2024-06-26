import React from 'react';
import Header from './components/header/Header';
import {Container} from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import ProductList from './components/product-list/ProductList';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <Header/>
      <Container>
        <Switch>
          <Route path='/the_shop/' exact component={ProductList}/>
          <Route path='/the_shop/cart' component={Cart}/>
        </Switch>
      </Container>
    </>
  );
}

export default App;
