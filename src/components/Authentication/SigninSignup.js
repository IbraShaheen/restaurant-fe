import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin, signup } from "../../store/actions/authActions";
import SignupLogo from "../Images/signup.webp";

const SigninSignup = () => {
  const dispatch = useDispatch()
  const history =  useHistory()
const [userIn, setUserIn] = useState(
  {
  username:"",
  password:""
})

const [userUp, setUserUp] = useState(
  {
  username:"",
  password:"",
  phone:"",
  email:""
})
  
   const handleChangeIn = (event) => {
    setUserIn({...userIn,[event.target.name]:event.target.value})
   }

  const handleSignin = (event) => {
    event.preventDefault()
    dispatch(signin(userIn,history))
    // history.goBack()
  }
 


  const handleChangeUp = (event) => {
    setUserUp({...userUp,[event.target.name]:event.target.value})
    
   }

  const handleSignUp = (event) => {
    event.preventDefault()
    dispatch(signup(userUp))
    history.goBack()
  }

  return (
    <div className="forms-cont">
      <div>
        <center> <b>Welcome To Our Restaurant </b></center>
        <img src={SignupLogo} alt="" height="auto" width="100%" />
      </div>

      {/* Signin & Signup From */}
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            // checked
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>

          <div className="login-form">


            {/* signin form */}
            <form onSubmit={handleSignin}>
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input id="user" type="text" className="input" name="username" value={userIn.username} onChange={handleChangeIn} />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="password" value={userIn.password}
                    onChange={handleChangeIn}
                  />
                </div>

                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>

                <div className="hr"></div>
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
            </form>


            {/* signup form */}

            <form onSubmit={handleSignUp}>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input id="user" type="text" className="input" name="username" value={userUp.username}
                  onChange={handleChangeUp} />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="password" value={userUp.password}
                    onChange={handleChangeUp}
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="label">
                    phone
                  </label>
                  <input id="phone" type="tel" className="input" name="phone" value={userUp.phone}
                  onChange={handleChangeUp} />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email
                  </label>
                  <input id="pass" type="text" className="input" name="email" value={userUp.email} 
                  onChange={handleChangeUp}/>
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign Up" />
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
