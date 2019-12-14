// TODO  commit

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './components/Main'
import Product from './components/Product'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  render() {

    return (

      <div>
        <BrowserRouter>
          <Route exact path='/' component={Main}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/product' component={Product}></Route>
        </BrowserRouter>

        <footer className="_8Rna9 _09ncq GhZ_W" role="contentinfo">
          <div className="iseBh VWk7Y " style={{ maxWidth: "1012px" }}>
            <span className="DINPA"> © 2019 Instagram from Facebook</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;