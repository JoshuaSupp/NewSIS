import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';


const UpdateAdmin = () => {
    const {id} = useParams(); 
    const[password, setpassword] = useState('');
    const [role, setrole] = useState('');
    const [username, setusername] = useState('');
    const[error, setError] = React.useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:5000/editad/'+id)
        .then(res => {
            setpassword(res.data[0].password); 
            setrole(res.data[0].role);
            setusername(res.data[0].username);
        })
        .catch(err => console.log(err));
    }, [])

  

    const handleSubmit = (e) =>{
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
        e.preventDefault();
        if ( !username || !password || !role  ){
          setError(true);
          return false
        } else{
        axios.put('http://localhost:5000/updatead/'+id, {password,role,username})
        .then(res => {
            if(res.data.updated){
                navigate('../Admin')
            }else{
                alert('Not Updated');
            }
        })
      }   
    }
    
  return (
    <div class='addadmin'>
    <Navbar/>
  <h1>Update Admin</h1>
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
           
          />
           {/* Display a message if username is not available */}
        {/* {!usernameAvailable && <span className='invalid'>Username is not available!</span>} */}
          {/* {error && (username.length > 10  || username.length < 4) && <span class='invalid'> Username should be at most 10 characters long! </span>} */}
          {/* {error && !username && <span class='invalid'> Enter Valid Username!! </span>} */}
      
          <label>Admin Password</label>
          <input
           type="password"
           id='password'
           name='password'
           placeholder='~ Admin Password ~'
           value={password}
           onChange={e => setpassword(e.target.value)}
           
          />
 
   {error && !password && <span class='invalid'> Enter Valid Password!! </span>}

          <label>Role</label>
          <input
           type="text"
           id='role'
           name='role'
           placeholder='~ Admin Role ~'
           value={role}
           onChange={e => setrole(e.target.value)}
           
          />
        {error && !role && <span class='invalid'> Enter Valid Role!! </span>}
          <br/>
        <input class='submit' type="submit" value="Update"/>
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

export default UpdateAdmin