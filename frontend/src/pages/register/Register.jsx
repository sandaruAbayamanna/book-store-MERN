import React, { useEffect, useState } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice'
//import useHistory from 'react-router'

const Register = () => {

  const [username, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] =useState("")
  const[loading, setLoading] =useState(false)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, {isLoading}] = useRegisterMutation();


  useEffect(()=>{
    if (userInfo){
      navigate('/')
    }
  },[navigate, userInfo])
  const submitHandler=async(e)=>{

    e.preventDefault();

    try {
      const res = await register ({username ,email ,password}).unwrap();
      dispatch(setCredentials({ ...res}))
      navigate('/')
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Registration failed..',{variant:'error'})
    }

    //console.log(name,email,password)
  }

  return (
    <>
      <div className="topWrapper">
        <div className="auth-header">
          <div className="auth-header-logo">
            <img src="" alt="" className="auth-header-logo-img" />
          </div>
          <h1 className="auth-header-title">Create Account</h1>
          <p className="auth-header-subtitle">
            Create your account and be part of us
          </p>
        </div>
        <div className="auth-body">
          <form className="auth-form-validation" onSubmit={submitHandler}>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
  );
}

export default Register