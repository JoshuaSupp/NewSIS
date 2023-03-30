import React ,{useState, useEffect} from 'react'
import './Admin.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import Navbar from '../../Components/Navbar/Navbar';


const Admin = () => {

  const user=("Joshua");

  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (Admin_username) => {
    if(window.confirm("Are you sure that you want to a admin?")){
      axios.delete(`http://localhost:5000/api/remove/${Admin_username}`)
      
      toast.success("Admin Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }



  return (
    <div class='admin'>

<Navbar/>
      
     <link rel="preconnect" href="https://fonts.googleapis.com" /> 
    <link rel="preconnect" href="https://fonts.gstatic.com"  /> 
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;1,200&display=swap" rel="stylesheet"   />

    <div style={{display: "inline-block",marginLeft: "-90%;"}}>
    
     
    <h2>Welcome to the Admin page</h2>
        
        <div class="header">Welcome Mr.{}</div>
          <a href="/AddAdmin">
            <div class="add">-Add Admin</div>
          </a>
        </div> 

        <table style={{ width:'80%', marginLeft:'15%',marginBottom:'10%'}}>
          <tr style={{lineHeight: "80px",backgroundColor: "rgb(241, 110, 110)"}}>
          <th>Admin ID</th>
          <th>Admin Username</th>
          <th>Admin Password</th>
          <th></th>
          </tr>
          {data.map((item, index)=> {
    return(
          <tr>
          <td>{item.Admin_id}</td>
          <td style={{color:'white'}}>{item.Admin_username}</td>
          <td>{item.Admin_password}</td>

          <td style={{width:'20px'}}>
          <Link to={`/view/${item.Admin_id}`}>
         <button class='btnview'>View</button>
         </Link>             
         <button  class='btndelete' onClick={() => deleteContact(item.Admin_username)}  >Delete</button>       
          </td>
          </tr>
           )
    
          })}
          
          </table>

         

    </div>
  )
}

export default Admin