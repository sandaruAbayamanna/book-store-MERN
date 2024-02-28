import React, { useState } from 'react'
import "./navbar.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import logoImage from '../../assets/BOOKHUB Logo.png';


const Navbar = () => {
   

    const {userInfo} = useSelector((state)=> state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async ()=>{
        try {
            await dispatch(logout());
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
     
  return (
    <div >
      <div className="container">
        <div className="left">
          <img
            src={logoImage}
            alt=""
          />
          
        </div>
        <div className="right">
            {userInfo ? (
                <>
          <span>{userInfo.username}</span>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={logoutHandler}>Logout</span>
            </div>
          </div>
          </>
          ) :(
            <>
            <span>Login</span>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={logoutHandler}>Signin</span>
            </div>
          </div>
          </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar