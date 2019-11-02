import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
 
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
    <div>
      <BrowserRouter>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop/hats' component={Hats} />
     <Route path='/shop/jackets' component={Jackets} />
     </BrowserRouter>
    </div>
  );
}

export default App;
