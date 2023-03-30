import React, {useState, useEffect}from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './KXAccounts.css'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const KXAccounts = () => {
  const [data, setData] = useState([]);

  const loadData = async () =>{
    const response = await axios.get("http://localhost:5004/api/get");
    setData(response.data);
  };

  


  useEffect(()=> {
    loadData();
  }, []);

  //delete kxaccounts data
  const deleteContact = (id) => {
    if(window.confirm("Are you sure that you want to a kx student account?")){
      axios.delete(`http://localhost:5004/api/remove/${id}`)
      
      toast.success("Student Account Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (

    <div id='studentprof'>
        <Sidebar>
    <h2 id="stprofile"style={{marginBottom:'6%', textAlign:'center', width:'100%', marginLeft:'85%'}}>KX Student Profile Account Details</h2>
    
    <div id='stlogin'>      
<h1>KX1 Student Accounts</h1>
 <table id="customers">
  <tr>
    <th>ID</th>
    <th>Index No</th>
    <th>Student Name</th>
    <th>Username</th>
    <th>Password</th>
    <th></th>
  </tr>
  {data.map((item, index)=> {
    return(
  <tr>
      <td>{item.id}</td>
      <td>{item.index_no}</td>
      <td>{item.student_name}</td>
      <td >{item.username}</td>
      <td>{item.password}</td>
      <td>
      <button id="delbtn" onClick={() => deleteContact(item.id)}>Delete</button>
      </td>
  </tr>
    )
  })}
 
  </table>
  
  <div>
  <a href='/CreateKXLogin' style={{color:'white'}}>
  <button class='btncreatekxlogin'>
    Create KX Login
  </button>
  </a>
  </div>

    </div>

   

    </Sidebar>
    </div>
  )
}

export default KXAccounts