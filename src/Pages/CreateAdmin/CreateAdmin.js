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
  const[error, setError] = React.useState(false);
  const navigate = useNavigate();
  const [usernameAvailable, setUsernameAvailable] = useState(true); // state to store username availability

  useEffect(() => {
    // Function to check username availability on input change
    const checkUsernameAvailability = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/checkUsernameAvailability/${username}`);
        setUsernameAvailable(response.data.available);
      } catch (error) {
        console.error(error);
      }
    };
    if (username) {
      checkUsernameAvailability();
    }
  }, [username]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if ( !username || !password || !role  ){
      setError(true);
      return false
    } if (!usernameAvailable) {
      toast.error('Username is not available. Please choose a different username.');
      return false;
    }
    else{
      axios.post("http://localhost:5000/api/post", {
        username,
        password,
        role
      }).then(() => {
        setState({username:"",password:"",role:""})
        toast.success('Admin created successfully!');
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../Admin"), { replace: true });
    }
    
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    if (name === 'username' && ( value.length > 10 )  ) {
      return

    }
    
  if (name === 'password' && value.length > 6) {
    return; // password length validation
  }
  if (name === 'role' && value.length > 12) {
    return; // role length validation
  }
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
             
            />
             {/* Display a message if username is not available */}
          {/* {!usernameAvailable && <span className='invalid'>Username is not available!</span>} */}
            {/* {error && (username.length > 10  || username.length < 4) && <span class='invalid'> Username should be at most 10 characters long! </span>} */}
            {error && !username && <span class='invalid'> Enter Valid Username!! </span>}
        
            <label>Admin Password</label>
            <input
             type="password"
             id='password'
             name='password'
             placeholder='~ Admin Password ~'
             value={password}
             onChange={handleInputChange}
             
            />
   
     {error && !password && <span class='invalid'> Enter Valid Password!! </span>}
 
            <label>Role</label>
            <input
             type="text"
             id='role'
             name='role'
             placeholder='~ Admin Role ~'
             value={role}
             onChange={handleInputChange}
             
            />
          {error && !role && <span class='invalid'> Enter Valid Role!! </span>}
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