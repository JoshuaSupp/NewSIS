import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3002/login", {
      username: username,
      password: password,
    }).then((response) => {

      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].username)
        navigate('../Dashboard', { replace: true })
        }
    })
  }


  return (
    <div class='login'>
   
         <div class="container">
         <img  class='logo' src='./images/MeuLogo.png' alt='Meulabs Logo' width='120px' height="70px"  />
  <div class="left">
  
    <div class="header">

    <h2 class="animation a3" id='meulabs'>Meu Labs</h2>
      <h2 class="animation a1">Student Information System</h2>
      <h4 class="animation a2">Log in to your account using username and password</h4>
    </div>
    <div class="form">
      <input type="username" class="form-field animation a3" placeholder="Username"  onChange={(e) => {
       setUsername(e.target.value)
     }} />
      <input type="password" class="form-field animation a4" placeholder="Password"  onChange={(e) => {
       setPassword(e.target.value)
     }}/>
    
       
      <button class="animation a6" id="btnlogin" onClick={() => { login();  }}>LOGIN</button>
      
     
    </div>
    <p style={{marginLeft:"11%",marginTop:"5%",fontSize:"20px",fontFamily:"Arial"}}> {loginStatus}</p>
  </div>
  <div class="right"></div>
</div>
    </div>
    
  )
}

export default Login