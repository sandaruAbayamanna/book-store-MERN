import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Home";
import Navbar from "../../components/navbar/Navbar";

const UserHome = () => {
  /* const navigate = useNavigate();

  useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo");

    if(userInfo){
      //history.push('/')
      navigate('/')
    }
  },[history])
 */

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default UserHome;
