import React, {useState, useEffect}from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar'

const ANAccounts = () => {
  const [data, setData] = useState([]);

  const loadData = async () =>{
    const response = await axios.get("http://localhost:5005/api/get");
    setData(response.data);
  };

  


  useEffect(()=> {
    loadData();
  }, []);

  //delete kxaccounts data
  const deleteContact = (id) => {
    if(window.confirm("Are you sure that you want to a kx student account?")){
      axios.delete(`http://localhost:5005/api/remove/${id}`)
      
      toast.success("Student Account Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }

  return (
<div class='admin'>

<Navbar/>
      
     <link rel="preconnect" href="https://fonts.googleapis.com" /> 
    <link rel="preconnect" href="https://fonts.gstatic.com"  /> 
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;1,200&display=swap" rel="stylesheet"   />

    <div style={{display: "inline-block",marginLeft: "0%;"}}>
    
     
    <h2 style={{marginLeft:"100%"}}>Welcome to AN Accounts page</h2>
        
      <div>
      <button class="add" style={{color:'black',marginLeft:'5%',width:'200px',height:'50px',fontSize:'20px',backgroundColor:'#FF8040'}}><a href="/ANRegistry">Back To AN Registry</a></button>
    
      </div>

          <a href="/CreateANLogin">
            <div class="add">- Add AN Student Account - </div>
          </a>
        </div> 

        <table style={{ width:'80%', marginLeft:'15%',marginBottom:'10%',backgroundColor:'black'}}>
          <tr style={{lineHeight: "80px"}}>
          <th>Index No</th>
          <th>Student Name</th>
          <th>Username</th>
          <th>Password</th>
          <th>Actions</th>
          </tr>
          {data.map((item, index)=> {
    return(
          <tr>
          <td style={{background:'#BFBFBF'}}>{item.index_no}</td>
          <td style={{background:'#BFBFBF'}}>{item.student_name}</td>
          <td style={{background:'#BFBFBF'}}>{item.username}</td>
          <td style={{background:'#BFBFBF'}}>{item.password}</td>
          

          <td style={{width:'20px',background:' #BFBFBF',borderRadius:'10px'}}>            
            <img  onClick={() => deleteContact(item.id)} style={{marginTop: "40px", marginLeft: "0px",width:"70px",height:"60px",}}  src ="/images/deleteicon.png"   alt='' />
            <Link to={`/updateans/${item.id}`}  >Update </Link>
          </td>
          </tr>
           )
    
          })}
          
          </table>

         

    </div>
  )
}

export default ANAccounts