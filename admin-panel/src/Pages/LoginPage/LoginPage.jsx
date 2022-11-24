import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import TopBar from "../../Components/TopBar/TopBar";
import "../LoginPage/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../env"

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
      url:`${SERVER_URL}/api/v1/login`,
    }
    try{
      const res = await axios(config)
      
      if(res.data.status == "success"){
        await AsyncStorage.setItem("@token", res.data.authorisation.token);
        navigation.navigate('/user')
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