import React from 'react';
import { useState } from 'react';
import PhoneInput from "react-phone-number-input";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  
  const navigate = useNavigate();

  const [phoneOrEmailvalue, setPhoneOrEmailValue] = useState("");
  return (
    <div className=' border h-screen w-screen p-5 flex justify-center items-center flex-col gap-2.5'>
        <div className="mainLogoTitle ">
            <h1 className='text-2xl font-extrabold text-5xl '>Neural <span className='text-green-700'>Feed</span></h1>
        </div>
        <div className="ShortExplanationOfIt">
          <p>Quick Feed Your Mind With All <br />
              The Knowlegde In the World
            </p>
        </div>
        { showSignUpForm ? (
          <form className="SignInCard border p-3 flex gap-3 flex-col rounded-xl shadow">
          <div className="emailInputDiv">
          {/* <PhoneInput
              placeholder="Enter phone number or email"
              value={phoneOrEmailvalue}
              onChange={setPhoneOrEmailValue}
              className='w-5'
          /> */}
          <input type="email" name="Email" id="" placeholder='Email' className='outline-green-700 border rounded px-2.5 p-2 ' required/>
          </div>
          <div className="passWordInputDiv">
          <input type="password" name="Password" id="" placeholder='Password' className='outline-green-700 border rounded px-2.5 p-2 ' required/>
          </div>
          <div className="LogInButtonDiv flex justify-center items-center">
          <button type="button" className='outline-green-700 border rounded px-2.5 p-2 bg-green-700 text-white font-bold p-2 w-full' ><h1>Login</h1></button>
          </div>
          <div className="forgotPasswordDiv">
            <p className='underline text-green-700 text-center '>forgot password?</p>
          </div>
          
        </form>
        ) : (
          <form className="SignInCard border p-3 flex gap-3 flex-col rounded-xl shadow">
          <div className="UsernameInputDiv">
          {/* <PhoneInput
              placeholder="Enter phone number or email"
              value={phoneOrEmailvalue}
              onChange={setPhoneOrEmailValue}
              className='w-5'
          /> */}
          <input type="name" name="Username" id="" placeholder='Username' className='outline-green-700 border rounded px-2.5 p-2 ' required/>
          </div>
          <div className="emailInputDiv">
          {/* <PhoneInput
              placeholder="Enter phone number or email"
              value={phoneOrEmailvalue}
              onChange={setPhoneOrEmailValue}
              className='w-5'
          /> */}
          <input type="email" name="Email" id="" placeholder='Email' className='outline-green-700 border rounded px-2.5 p-2 ' required/>
          </div>
          <div className="passWordInputDiv">
          <input type="password" name="Password" id="" placeholder='Password' className='outline-green-700 border rounded px-2.5 p-2 ' required/>
          </div>
          <div className="passWordInputDiv">
          <input type="password" name="Password" id="" placeholder='Confirm Password' className='outline-green-700 border rounded px-2.5 p-2 ' required/>
          </div>
          <div className="LogInButtonDiv flex justify-center items-center">
          <button type="button" className='outline-green-700 border rounded px-2.5 p-2 bg-green-700 text-white font-bold p-2 w-full' ><h1>Login</h1></button>
          </div>
          <div className="forgotPasswordDiv">
            <p className='underline text-green-700 text-center '>forgot password?</p>
          </div>
          
        </form>
        )

        }
        
        <hr />

          <div className="createAccDivButton">
          <button onClick={(()=>{
            setShowSignUpForm(!showSignUpForm)
            // navigate("/signup")

          })} type="button" className='outline-green-700 border rounded px-2.5 p-2 bg-green-700 text-white font-bold p-2 w-' ><h1>Create New Account</h1></button>
          </div>

    </div>
  )
}

export default SignIn