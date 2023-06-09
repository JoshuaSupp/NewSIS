import React ,{useState, useEffect} from 'react'
import './Admin.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import Navbar from '../../Components/Navbar/Navbar';


const Admin = () => {

 

  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if(window.confirm("Are you sure that you want to a admin?")){
      axios.delete(`http://localhost:5000/api/remove/${id}`)
      
      toast.success("Admin Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  const username=('Joshua');

  return (
    <div class='admin'>

<Navbar/>
      
     <link rel="preconnect" href="https://fonts.googleapis.com" /> 
    <link rel="preconnect" href="https://fonts.gstatic.com"  /> 
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;1,200&display=swap" rel="stylesheet"   />

    <div style={{display: "inline-block",marginLeft: "-90%;"}}>
    
     
    <h2>Welcome to the Admin page</h2>
        
        <div class="header">Welcome Mr.{username}</div>
          <a href="/CreateAdmin">
            <div class="add">- Add Admin - </div>
          </a>
        </div> 

        <table style={{ width:'80%', marginLeft:'15%',marginBottom:'10%'}}>
          <tr style={{lineHeight: "80px",backgroundColor: "rgb(241, 110, 110)"}}>
          <th>Admin Username</th>
          <th>Admin Password</th>
          <th>Role</th>
          <th>Actions</th>
          </tr>
          {data.map((item, index)=> {
    return(
          <tr>
          <td style={{background:'white'}}>{item.username}</td>
          <td style={{background:'white'}}>{item.password}</td>
          <td style={{background:'white'}}>{item.role}</td>

          <td style={{width:'20px',background:' #BFBFBF',borderRadius:'10px'}}>            
            <img  onClick={() => deleteContact(item.id)} style={{marginTop: "40px", marginLeft: "0px",width:"70px",height:"60px",}}  src ="/images/deleteicon.png"   alt='' />
            <Link to={`/updatead/${item.id}`}  >Update </Link>
          </td>
          </tr>
           )
    
          })}
          
          </table>

         

    </div>
  )
}

export default Admin