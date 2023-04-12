import React , {useState, useEffect} from "react";
import {useParams,  useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import axios from "axios"
import Sidebar from '../../Components/Sidebar/Sidebar'
import './PDRegistry.css'
import Navbar from "../../Components/Navbar/Navbar";

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



const PDRegistry = () => {

  
   //view data from pd1e01_registry table
   const[data, setData] = useState([]);

   const loadData = async () => {
     const response = await axios.get("http://localhost:5003/api/get");
     setData(response.data);
   };
 
   useEffect(() => {
     loadData();
   }, []);
   
   //delete kx1e01_registry data
   const deleteContact = (id) => {
     if(window.confirm("Are you sure that you want to delete a PD Student?")){
       axios.delete(`http://localhost:5003/api/remove/${id}`)
       
       toast.success("PD Student Deleted Successfully");
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

<h2 style={{paddingBottom:"5%",marginTop:"7%"}}>Product Design</h2>


        <div>
        
        <button class="button button1"><a href="/CreatePD">Add PD Students</a></button>

        
        <button class="button button2"><a href="/PDStudentG">PD Student Grades</a></button>
        </div>
        <table>
            <tr style={{lineHeight: "50px",backgroundColor: "rgb(241, 110, 110)"}}>
              <th style={{color:"black"}}>ID</th>
              <th style={{color:"black"}}>Index No</th>
              <th style={{color:"black"}}>Student Name</th>
              <th style={{color:"black"}}>Age</th>
              <th style={{color:"black"}}>School</th>
              <th style={{color:"black"}}>Parent Name</th>
              <th style={{color:"black"}}>Parent/Student Contact</th>
              <th style={{color:"black"}}>Comments</th>
              <th></th>
            </tr>
     
   
            {data.map((item, index)=> {
    return(
            <tr style={{lineHeight: "50px",backgroundColor: "rgb(241, 110, 110)"}}>
              <td>{item.id}</td>
              <td>{item.index_no}</td>
              <td>{item.full_name}</td>
              <td>{item.age}</td>
              <td>{item.school}</td>
              <td>{item.parent_name}</td>
              <td>{item.parent_contact}</td>
              <td>{item.comments}</td>
               <td>  <img onClick={() => deleteContact(item.id)} style={{marginTop: "40px", marginLeft: "0px",width:"70px",height:"60px"}}  src ="/images/deleteicon.png"   alt='' />
               <Link to={`/updatepdreg/${item.id}`}  >Update </Link>
               </td> 
            
         
            </tr>
    )
    
          })}
          
          
            
            
            
          </table>
    </div>

  )
}

export default PDRegistry