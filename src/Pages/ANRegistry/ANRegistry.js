import Sidebar from '../../Components/Sidebar/Sidebar'
import './ANRegistry.css'
import React , {useState, useEffect} from "react";
import {useParams,  useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import axios from "axios"
import Navbar from '../../Components/Navbar/Navbar';

const initialState = {
  index_no:"",
  full_name: "",
  age:"",
  dob:"",
  school:"",
  student_contact:"",
  parent_name:"",
  parent_email:"",
  parent_contact:"",
  address:"",
  comments:"",
  payments:""
}

const ANRegistry = () => {

   //view data from an_registry table
   const[data, setData] = useState([]);

   const loadData = async () => {
     const response = await axios.get("http://localhost:5002/api/get");
     setData(response.data);
   };
 
   useEffect(() => {
     loadData();
   }, []);
   
   //delete an_registry data
   const deleteContact = (id) => {
     if(window.confirm("Are you sure that you want to delete a AN Student?")){
       axios.delete(`http://localhost:5002/api/remove/${id}`)
       
       toast.success("AN Student Deleted Successfully");
       setTimeout(() => loadData(), 500);
     }
   }
   return (
    <div class='kx'>

      <Navbar/>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,200&display=swap" rel="stylesheet"></link>

        <div>
          <a href="./Dashboard">
          <img src="/images/Home button.png"  width="150px" alt='home'/>
        </a>
      </div>

      {/* <div class="textbox">
            <shape class= "square"><h1 style={{lineHeight: "120px",top:"-40px"}}>Analytics Clan </h1> </shape>
        </div> */}

<h2 style={{paddingBottom:"5%",marginTop:"7%"}}>Analytics</h2>


        <div>
        
        <button class="button button1"><a href="/CreateAN">Add AN Students</a></button>

        
        <button class="button button2"><a href="/ANStudentG">AN Student Grades</a></button>
        </div>
        <table>
            <tr style={{lineHeight: "20px",backgroundColor: "rgb(241, 110, 110)"}}>
            
              <th style={{color:"black"}}>Index No</th>
              <th style={{color:"black"}}>Student Name</th>
              <th style={{color:"black"}}>Age</th>
              <th style={{color:"black"}}>School</th>
              <th style={{color:"black"}}>Parent Name</th>
              <th style={{color:"black"}}>Parent/Student Contact</th>
              <th style={{color:"black"}}>Parent Email</th>
              <th style={{color:"black"}}>Comments</th>
              <th style={{color:"black"}}>Actions</th>
              <th style={{color:"black"}}>Certificate Template</th>
              <th style={{color:"black"}}>Send Final Certificate</th>
            </tr>
     
   
            {data.map((item, index)=> {
    return(
            <tr style={{lineHeight: "20px",backgroundColor: "rgb(241, 110, 110)"}}>
              
              <td>{item.index_no}</td>
              <td>{item.full_name}</td>
              <td>{item.age}</td>
              <td>{item.school}</td>
              <td>{item.parent_name}</td>
              <td>{item.parent_contact}</td>
              <td>{item.parent_email}</td>
              <td>{item.comments}</td>
               <td>  <img onClick={() => deleteContact(item.id)} style={{marginTop: "40px", marginLeft: "0px",width:"70px",height:"60px"}}  src ="/images/deleteicon.png"   alt='' />
          
              <Link to={`/updateanreg/${item.id}`}  >Update </Link>
              </td> 
              <td><a href='https://drive.google.com/file/d/1p8fQKcVjD7VHUlM8_ieNSX-9ROaE3fkZ/view?usp=sharing' target='blank'>Template</a></td>
              <td><a href='https://mail.google.com/mail/u/0/#inbox' target='blank'>Email</a></td>
            </tr>
    )
    
          })}
          
          
            
            
            
          </table>
    </div>
  )
}

export default ANRegistry