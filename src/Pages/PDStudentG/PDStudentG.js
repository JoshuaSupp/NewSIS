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


const PDStudentG = () => {

    const[data, setData] = useState([]);

   const loadData = async () => {
     const response = await axios.get("http://localhost:5003/api/get");
     setData(response.data);
   };
 
   useEffect(() => {
     loadData();
   }, []);


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

<h2 style={{paddingBottom:"5%",marginTop:"7%",marginBottom:'40px'}}>Product Design Student Grades</h2>


      <div>
      
      <button class="button button1"><a href="/PDRegistry">Back To PD Registry</a></button>

      
    
      </div>
      <table>
          <tr style={{lineHeight: "20px",backgroundColor: "rgb(241, 110, 110)"}}>
            <th style={{color:"black"}}>Index No</th>
            <th style={{color:"black"}}>Student Name</th>
            <th style={{color:"black"}}>Grades
            <br/>
            <th style={{color:"blue"}}>Puzzle 01</th>
            <th style={{color:"blue"}}>Puzzle 02</th>
            <th style={{color:"blue"}}>Puzzle 03</th>
            <th style={{color:"blue"}}>Puzzle 04</th>
            <th style={{color:"blue"}}>Puzzle 05</th>
            <th style={{color:"blue"}}>Puzzle 06</th>
            </th>
            <th style={{color:"black"}}>Total Grade</th>
            <th  style={{color:"black"}}>Action</th>
          </tr>
   
 
          {data.map((item, index)=> {
  return(
          <tr style={{lineHeight: "20px",backgroundColor: "rgb(241, 110, 110)"}}>  
            <td>{item.index_no}</td>
            <td>{item.full_name}</td>
            <div >
            <td style={{backgroundColor:'white',height:'100px',width:'110px',marginLeft:'30%'}}>{item.puzzle_01}</td>
           <td style={{backgroundColor:'white',height:'100px',width:'110px',marginLeft:'30%'}}> {item.puzzle_02} </td>
           <td style={{backgroundColor:'white',height:'100px',width:'110px',marginLeft:'30%'}}> {item.puzzle_03} </td>
           <td style={{backgroundColor:'white',height:'100px',width:'110px',marginLeft:'30%'}}> {item.puzzle_04} </td>
           <td style={{backgroundColor:'white',height:'100px',width:'110px',marginLeft:'30%'}}> {item.puzzle_05} </td>
           <td style={{backgroundColor:'white',height:'100px',width:'110px',marginLeft:'30%'}}> {item.puzzle_06} </td>
            </div>
            <td>
            {item.total_grade}
            </td>
            <td>
              <Link to={`/updatepd/${item.id}`}>Update </Link>
            </td>
       
          </tr>
  )
  
        })}
        
        
          
          
          
        </table>
  </div>
  )
}

export default PDStudentG