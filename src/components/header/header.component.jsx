import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />            
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
        SHOP
        </Link>
        <Link className='contact' to='/contact'>
        CONTACT
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
        <Link className='option' to='/signIn'>
            SIGN IN
        </Link>
        }
        </div>
    </div>
    );

export default Header;