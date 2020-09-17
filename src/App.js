import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import CheckOut from './container/BurgerBuilder/CheckOut/Checkout';




import './App.css';
class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <BurgerBuilder />
          {/* <CheckOut /> */}
          
        </Layout>
      </div>
    );
  }
}



export default App;
