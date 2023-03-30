import React, {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Sidebar from '../../Components/Sidebar/Sidebar'

const PDAccounts = () => {

    const [data, setData] = useState([]);

    const loadData = async () =>{
      const response = await axios.get("http://localhost:5006/api/get");
      setData(response.data);
    };
  
  
    useEffect(()=> {
      loadData();
    }, []);
  
    //delete anaccounts data
    const deleteContact = (id) => {
      if(window.confirm("Are you sure that you want to a pd student account?")){
        axios.delete(`http://localhost:5006/api/remove/${id}`)
        
        toast.success("Student Account Deleted Successfully");
        setTimeout(() => loadData(), 500);
      }
    }
  


  return (
    <div id='studentprof'>
        <div id='stlogin' >
         <Sidebar>
         <h2 id="stprofile"style={{marginBottom:'6%', textAlign:'center', width:'100%', marginLeft:'85%'}}>PD Student Profile Account Details</h2>
    <h1>PD1 Student Accounts</h1>
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
    
  <button class='btncreatekxlogin'>
  <a href='/CreatePDLogin' style={{color:'white'}}>
    Create PD Login
    </a>
  </button>
  </div>

  
  </Sidebar>
    </div>

    </div>
  )
}

export default PDAccounts