import React, {useState, useEffect}  from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'
import Navbar from '../../Components/Navbar/Navbar'

const initialState = {
  index_no:"",
  student_name: "",
  username: "",
  password:"",
}

const CreateANLogin = () => {

  const [state, setState] = useState(initialState);
  const {index_no,student_name,username,password} = state;
  const navigate = useNavigate();
  const[error, setError] = React.useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if ( !index_no || !student_name || !username || !password  ){
      setError(true);
      return false
    }else{
      axios.post("http://localhost:5005/api/post", {
        index_no,
        student_name,
        username,
        password
      }).then(() => {
        setState({index_no:"",student_name:"",username:"",password:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../ANAccounts"), { replace: true });
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    if (name === 'index_no' && ( value.length > 6 )  ) {
      return
    }
    if (name === 'student_name' && value.length > 25) {
    return; 
    }
    if (name === 'username' && value.length > 12) {
    return; 
    }
    if (name === 'password' && value.length > 10) {
      return; 
      }
    setState({ ...state, [name]: value });
    

}

  return (
    <div class='addadmin'>
    <Navbar/>
  <h1>Add AN Student Account</h1>
      <br />
      <div class="description">
        <form class='adminform' onSubmit={handleSubmit}>

          <label>Index Number</label>
          <input
           type="text"
           id='index_no'
           name='index_no'
           placeholder='~ Index Number ~'
           value={index_no}
           onChange={handleInputChange}
           
          />
           {/* Display a message if username is not available */}
        {/* {!usernameAvailable && <span className='invalid'>Username is not available!</span>} */}
          {/* {error && (username.length > 10  || username.length < 4) && <span class='invalid'> Username should be at most 10 characters long! </span>} */}
          {error && !index_no && <span class='invalid'> Enter Valid Index Number!! </span>}
      
          <label>Student Name</label>
          <input
           type="text"
           id='student_name'
           name='student_name'
           placeholder='~ Student Name ~'
           value={student_name}
           onChange={handleInputChange}
           
          />
 
   {error && !student_name && <span class='invalid'> Enter Student Name!! </span>}

          <label>Username</label>
          <input
           type="text"
           id='username'
           name='username'
           placeholder='~ Username ~'
           value={username}
           onChange={handleInputChange}
           
          />
        {error && !username && <span class='invalid'> Enter Valid Username!! </span>}
          
        <label>Password</label>
          <input
           type="password"
           id='password'
           name='password'
           placeholder='~ Password ~'
           value={password}
           onChange={handleInputChange}
           
          />
        {error && !password && <span class='invalid'> Enter Valid Password!! </span>}
          
          
          <br/>
        <input class='submit' type="submit" value="Create"/>
        </form>
       
      </div>
    
      <div class="exit-btn">
        <a href="/ANAccounts">
          <button class="exit">Back</button>
        </a>
      </div>
  
      </div>
  )
}

export default CreateANLogin