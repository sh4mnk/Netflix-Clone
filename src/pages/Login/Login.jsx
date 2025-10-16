
import React, {  useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {

  const [signstate, setSignState] = useState('Sign In')
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading ,setLoading] = useState(false);

  const user_auth = async (event)=> {
    event.preventDefault();
    setLoading(true);
    if(signstate === "Sign In"){
      await login(Email, Password);
    }else{
      await signup(Name, Email, Password);
    }
    setLoading(false);
  }


  return (
    Loading ? <div className='login-spinner'><img src={netflix_spinner}  alt="" /></div> :
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form >
          {signstate === "Sign Up" ? <input value={Name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' /> : <></>}

          <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' />
          <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signstate}</button>
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