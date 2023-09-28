import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      products: [
        { name: 'Товар 1', isSelected: false },
        { name: 'Товар 2', isSelected: false },
        { name: 'Товар 3', isSelected: false },
      ],
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  handleProductSelect = (index) => {
    const products = [...this.state.products];
    products[index].isSelected = !products[index].isSelected;
    this.setState({ products });
  };

  render() {
    const selectedCount = this.state.products.filter((product) => product.isSelected).length;

    return (
      <div>
        <Header
          isLoggedIn={this.state.isLoggedIn}
          onLoginClick={this.handleLoginClick}
          onLogoutClick={this.handleLogoutClick}
        />
     
        <Body
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
        <Footer selectedCount={selectedCount} />
      </div>
    );
  }
}
export default App;