import React, {useState, useEffect}  from 'react'
import Navbar from '../../Components/Navbar/Navbar'
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
    <div class='addadmin'>
      <Navbar/>
    <h1>Add Admin</h1>
        <br />
        <div class="description">
          <form class='adminform' onSubmit={handleSubmit}>

            <label>Admin Username</label>
            <input
             type="text"
             id='username'
             name='username'
             placeholder='~ Admin Username ~'
             value={username}
             onChange={handleInputChange}
             required
            />
    
            <label>Admin Password</label>
            <input
             type="text"
             id='password'
             name='password'
             placeholder='~ Admin Password ~'
             value={password}
             onChange={handleInputChange}
             required
            />

            <label>Role</label>
            <input
             type="text"
             id='role'
             name='role'
             placeholder='~ Admin Role ~'
             value={role}
             onChange={handleInputChange}
             required
            />
            <br/>
          <input class='submit' type="submit" value="Create"/>
          </form>
         
        </div>
      
        <div class="exit-btn">
          <a href="/Admin">
            <button class="exit">Back</button>
          </a>
        </div>
    
        </div>
  )
}

export default CreateAdmin