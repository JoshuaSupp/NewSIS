import React , {useState, useEffect} from "react";
import {useParams,  useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import axios from "axios"
import Navbar from '../../Components/Navbar/Navbar';
import './ANStudentG.css'


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

const ANStudentG = () => {
    //view data from an1e01_registry table
   const[data, setData] = useState([]);

   const loadData = async () => {
     const response = await axios.get("http://localhost:5002/api/get");
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

<h2 style={{paddingBottom:"5%",marginTop:"7%",marginBottom:'40px'}}>Analytics Student Grades</h2>


      <div>
      
      <button class="button button1"><a href="/ANRegistry">Back To AN Registry</a></button>

      
  
      </div>
      <table>
          <tr style={{lineHeight: "50px",backgroundColor: "rgb(241, 110, 110)"}}>
            <th style={{color:"black"}}>ID</th>
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
            
          </tr>
   
 
          {data.map((item, index)=> {
  return(
          <tr style={{lineHeight: "50px",backgroundColor: "rgb(241, 110, 110)"}}>
            <td>{item.id}</td>
            <td>{item.index_no}</td>
            <td>{item.full_name}</td>
            <td>
            <select name="Progress" id="progress" style={{marginLeft:'-5%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 

            <select name="Progress" id="progress"style={{marginLeft:'3.5%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 

            <select name="Progress" id="progress" style={{marginLeft:'3.5%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 

            <select name="Progress" id="progress" style={{marginLeft:'3.5%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 

            <select name="Progress" id="progress" style={{marginLeft:'3.5%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 

            <select name="Progress" id="progress" style={{marginLeft:'4%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 
            </td>      
            {/* Total grade*/}
            <td>
            <select name="Progress" id="progress" style={{marginLeft:'0%', marginTop:'34%'}}>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            </select> 
            </td>
       
          </tr>
  )
  
        })}
        
        
          
          
          
        </table>
  </div>
  )
}

export default ANStudentG