import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
 

class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     currentUser: null
   }
 }

 unsubscribeFromAuth = null;

 componentDidMount() { 
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  //it returns a method, calling which closes the subscription
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);
       
       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         })
       });
     }
     else
     this.setState({currentUser: userAuth});
   });
  }

 componentWillUnmount() {
   this.unsubscribeFromAuth(); 
 }
 
 
  render() {
  return (
    <Router>
    <div>
      <Header currentUser= { this.state.currentUser} />
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop' component={ShopPage} />
     <Route path='/signin' component={SignInAndSignUpPage} />
     </Switch>
    </div>
    </Router>
  );
}
}

export default App;
