import React, {useState, useEffect}  from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './CreateKXLogin.css'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
  index_no:"",
  student_name: "",
  username: "",
  password:"",
}

const CreateKXLogin = () => {

  const [state, setState] = useState(initialState);

  const {index_no,student_name,username,password} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if ( !index_no || !student_name || !username || !password  ){
      window.print("Please provide value into each field")
    }else{
      axios.post("http://localhost:5004/api/post", {
        index_no,
        student_name,
        username,
        password
      }).then(() => {
        setState({index_no:"",student_name:"",username:"",password:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../KXAccounts"), { replace: true });
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div>
        <Sidebar>
    <div class="login-box">
  <h2>Create KX Account</h2>
  <form  onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text"
       name="index_no" 
       id="index_no"
       required
       value={index_no}
       onChange={handleInputChange}
       />
      <label style={{color:'orange'}}>Index No</label>
    </div>
    <div class="user-box">
      <input 
      type="text" 
      name="student_name" 
      id="student_name"
      required
      value={student_name}
      onChange={handleInputChange}
      />
      <label style={{color:'orange'}}>Student Name</label>
    </div>
    <div class="user-box">
      <input
      type="text" 
      name="username" 
      id="username"
      required
      value={username}
      onChange={handleInputChange}
      />
      <label style={{color:'orange'}}>Username</label>
    </div>
    <div class="user-box">
      <input 
      type="password"
      name="password" 
      id="password"
      required
      value={password}
      onChange={handleInputChange}
      
      />
      <label style={{color:'orange'}}>Password</label>
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
  </form>
</div>
    </Sidebar>
    </div>
  )
}

export default CreateKXLogin