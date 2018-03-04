import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import appClasses from './App.css';

class App extends Component {
  render() {
    return (
      <Layout className={appClasses}>
        <BurgerBuilder/>
      </Layout>
    );
  }
}

export default App;
