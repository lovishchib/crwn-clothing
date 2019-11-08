import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='signInPage'>
    <div className="signIn">
        <SignIn/>
    </div>
    <div className="signUp">
        signUp
    </div>
    </div>
)

export default SignInAndSignUpPage;