import React, { useState } from 'react'
//import './register.scss'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import useHistory from 'react-router'

const Register = () => {

  const [username, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] =useState("")
  const[loading, setLoading] =useState(false)
  //const history = useHistory()


  const submitHandler=async(e)=>{

    e.preventDefault();

    //console.log(name,email,password)

    
    try {
      const config ={
        headers:{
          "content-type":"application/json",
        },
      }
      setLoading(true)

      const {data} = await axios.post('http://localhost:5555/auth/register',
      {
        username,
        email,
        password,
      },
      config
      )

      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(data))

      //history.push('http://localhost:5555/auth/login')
      
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
    {/* <div className='register'>
      <div className="top">
        <h1>Register below</h1>
        <h4>Already have an account ? Login</h4>
      </div>

      <div className="container">
        <form action="">
          <label htmlFor="">Username</label>
          <input type="username" placeholder='username' />
          <label htmlFor="">Email</label>
          <input type="username" placeholder='username' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='password'/>
          <label htmlFor="">Confirm Password</label>
          <input type="password" placeholder='password'/>
          <button>Signup</button>
        </form>
      </div>
    </div> */}
<div className='topWrapper'>
    <div className="auth-header">
        <div className="auth-header-logo">
          <img src='' alt="" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Create Account</h1>
        <p className="auth-header-subtitle">
          Create your account and be part of us
        </p>
      </div>
      <div className="auth-body">
        <form className="auth-form-validation"
        onSubmit={submitHandler}
        >
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Full Name
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="Jhon doe" 
              required
              value={username}
              onChange={(e) =>setName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input-control"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="link-text-center">
            Signin instead
          </Link>
        </p>
      </div>
      </div>
      </>
  )
}

export default Register