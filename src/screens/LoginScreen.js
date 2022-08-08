import React, { useState } from 'react';
import './Loginscreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginscreen'>
        <div className="loginscreen_background">
            <img className='loginscreen_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <button className='signin_btn' onClick={() => setSignIn(true)}  >Sign in</button>
            <div className="loginscreen_gradient">
            </div>
            <div className="loginscreen_body">
                {signIn ? (
                    <SignUpScreen /> ): (
                    <>
                <h1>Unlimited films, TV programmes, and more.</h1>
                <h2>Watch anywhere, Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart membership.</h3>
                <div className="loginscreen_input">
                <form >
                <input type="email" placeholder='Email Address' />
                <button className='login_getstarted' onClick={() => setSignIn(true)} >GET STARTED</button>
                </form>
                </div>
                </>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default LoginScreen