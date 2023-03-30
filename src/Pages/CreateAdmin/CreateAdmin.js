import React, {useState, useEffect}  from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './CreateAdmin.css'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
  username:"",
  password: "",
  role: "",
}

const CreateAdmin = () => {
  const [state, setState] = useState(initialState);

  const {username,password,role} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if ( !username || !password || !role  ){
      window.print("Please provide value into each field")
    }else{
      axios.post("http://localhost:5000/api/post", {
        username,
        password,
        role
      }).then(() => {
        setState({username:"",password:"",role:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../Admin"), { replace: true });
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div id='cadmin'>
    <Sidebar>
    <div class="login-box">
  <h2>Create Admin</h2>
  <form  onSubmit={handleSubmit}>
    <div class="user-box">
      
    </div>
    <div class="user-box">
      <input
      type="text" 
      id="username"
      name="username" 
      required
      
      value={username}
      onChange={handleInputChange}
      />
      <label style={{color:'orange'}}>Username</label>
    </div>
    <div class="user-box">
      <input type="password" 
      id="password"
      name="password" 
      required
      value={password}
      onChange={handleInputChange}
      />
      <label style={{color:'orange'}}>Password</label>
    </div>
    <div class="user-box">
      <input type="text"
       id="role" 
       name="role" 
       required
       value={role}
       onChange={handleInputChange}
       />
      <label  style={{color:'orange'}}>Role</label>
    </div>

    <div id='createadmin'>
    <a href='#'>
    <span></span>
      <span></span>
      <span></span>
      <span></span>
   <input  type="submit"  value="Create Admin"/>
   </a>
   </div>
   {/* <a href='/'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Create Admin
   </a> */}
  </form>
</div>
    </Sidebar>
    </div>
  )
}

export default CreateAdmin