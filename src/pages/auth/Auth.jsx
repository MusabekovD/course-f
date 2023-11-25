import React from 'react'
import {auth, provider} from "../../config/firebase-config"
import { signInWithPopup } from 'firebase/auth' 

const Auth = () => {

const signInWithGoogle = async() =>{
  await signInWithPopup(auth, provider)
}

  return (
    <div className='login-page'>
    <h3>Sign In with Google</h3>
    <button className='login-with-google-btn' onClick={signInWithGoogle}>SignInWithGoogle</button>
    </div>
  )
}

export default Auth
