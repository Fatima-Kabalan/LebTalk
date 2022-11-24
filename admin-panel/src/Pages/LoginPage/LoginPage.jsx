import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import TopBar from "../../Components/TopBar/TopBar";
import "../LoginPage/LoginPage.css";
import request from "../../config/axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const SignIn = () => {
    const data = {
      email,
      password,
    };
    request({
      method: "post",
      url: "http://192.168.16.106:5000/api/v1/login",
      data,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.authorisation.token);
        console.log('token');
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <TopBar />
      <div className="login-container">
        <div className="login">
          <Input
            type={"email"}
            label={"Email"}
            placeholder={"Enter your Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Password"}
            placeholder={"Enter your Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            mode={"primary"}
            onClick={SignIn}
            text={"Signin"}
            width={"big"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;