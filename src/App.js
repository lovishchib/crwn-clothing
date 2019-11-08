import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
 
const Hats = () => (
  <div>
      <h1>HATS PAGE</h1>
  </div>
);

const Jackets = () => (
  <div>
      <h1>JACKETS PAGE</h1>
  </div>
);

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop' component={ShopPage} />
     <Route path='/signin' component={SignInAndSignUpPage} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
