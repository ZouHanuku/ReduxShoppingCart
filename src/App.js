import React, { Component } from 'react';
import ListArticles from './containers/ListArticles';
import Cart from './containers/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ListArticles />
          <Cart />
      </div>
    );
  }
}

export default App;
