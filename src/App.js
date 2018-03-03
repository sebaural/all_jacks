import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="App-header">
          <div className="logo_holder">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h2>Build React Burger</h2>
        </div>

  </Layout>
    );
  }
}

export default App;
