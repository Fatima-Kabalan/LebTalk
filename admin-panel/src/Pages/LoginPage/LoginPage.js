import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import TopBar from "../../Components/TopBar/TopBar";
import "../LoginPage/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { REACT_APP_BASE_URL } from "../../env.js";
import axios from 'axios';

const LoginPage = () => { 
  const navigate = useNavigate();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  
  const signin = async () => {
    const data = {
      email:email,
      password:password,
    }

    const config = {
      method: "post",
      data,
      url:`${REACT_APP_BASE_URL}/api/v1/login`,
    }
    try{
      const res = await axios(config)
      
      if(res.data.status === "success"){
        await localStorage.setItem("@token", res.data.authorisation.token);
        navigate('/user')
      }
    }catch(error){
      console.warn(error)
      return error
    }
  }
  return (
    <>
      <TopBar />
      <div className="login-container">
        <div className="login">
          <Input
            type={"email"}
            label={"Email"}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Password"}
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            mode={"primary"}
            onClick={signin}
            text={"Signin"}
            width={"big"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;