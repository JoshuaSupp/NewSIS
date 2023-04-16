import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';


const UpdateANAccounts = () => {
    const {id} = useParams(); 
    const[index_no, setindexno] = useState('');
    const [student_name, setstudentname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const[error, setError] = React.useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:5006/editpds/'+id)
        .then(res => {
            setindexno(res.data[0].index_no); 
            setstudentname(res.data[0].student_name);
            setusername(res.data[0].username);
            setpassword(res.data[0].password);
        })
        .catch(err => console.log(err));
    }, [])

    
    const handleSubmit = (e) =>{
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
          e.preventDefault();
          if ( !username || !password || !student_name  ){
            setError(true);
            return false
          } else{
          axios.put('http://localhost:5006/updatepds/'+id, {student_name,username,password})
          .then(res => {
              if(res.data.updated){
                  navigate('../PDAccounts')
              }else{
                  alert('Not Updated');
              }
          })
        }   
      }

  return (
    <div class='addadmin'>
    <Navbar/>
  <h1>Update PD Student Account</h1>
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
           onChange={e => setstudentname(e.target.value)}
           
          />
 
   {error && !student_name && <span class='invalid'> Enter Student Name!! </span>}

          <label>Username</label>
          <input
           type="text"
           id='username'
           name='username'
           placeholder='~ Username ~'
           value={username}
           onChange={e => setusername(e.target.value)}
           
          />
        {error && !username && <span class='invalid'> Enter Valid Username!! </span>}
          
        <label>Password</label>
          <input
           type="password"
           id='password'
           name='password'
           placeholder='~ Password ~'
           value={password}
           onChange={e => setpassword(e.target.value)}
           
          />
        {error && !password && <span class='invalid'> Enter Valid Password!! </span>}
          
          
          <br/>
        <input class='submit' type="submit" value="Update"/>
        </form>
       
      </div>
    
      <div class="exit-btn">
        <a href="/PDAccounts">
          <button class="exit">Back</button>
        </a>
      </div>
  
      </div>
  )
}

export default UpdateANAccounts