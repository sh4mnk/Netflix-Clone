
import React, { use, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signstate, setSignState] = useState('Sign In')
  

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form >
          {signstate === "Sign Up" ? <input type="text" placeholder='Your Name' /> : <></>}

          <input type="email" placeholder='Email' />
          <input type="email" placeholder='Password' />
          <button>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign In" ?
            <p>New to Netflix?<span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>
            :
            <p >Already have account?<span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div> 
  )
}

export default Login