import React, {useState, useEffect}  from 'react'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'
import Navbar from '../../Components/Navbar/Navbar'
import './CreateAN.css'

const initialState = {
  indexno:"",
  full_name:"",
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



const CreateAN = () => {

  
  const [state, setState] = useState(initialState);

  const {index_no,full_name,age,school,parent_name,parent_contact,comments} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!index_no || !full_name || !age || !school  ){
      toast.error("Please provide value into each field")
    }else{
      axios.post("http://localhost:5002/api/post", {
        index_no,full_name,age,school,parent_name,parent_contact,comments
      }).then(() => {
        setState({
        index_no:"",
        full_name:"",
        age:"",
        school:"",
        parent_name:"",
        parent_contact:"",
        comments:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../ANRegistry"), 500);
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }




  return (
    <div class='add'>

      <Navbar/>


    
  <h1 style={{color:"black",marginLeft: "1.5%"}}>Add AN Students</h1>
    
    
  <div style={{marginTop: "120px", background:'orangered'}}class="container">
  <form onSubmit={handleSubmit}>
  <div class="row">
    <div class="col-25">
      <label for="fname">Index Number</label>
    </div>
    <div class="col-75">
      <input 
      type="text" id="index_no" name="index_no" required 
      value={index_no} 
      onChange={handleInputChange}
      />


    </div>
  </div>


  <div class="row">
    <div class="col-25">
      <label for="lname">Student Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name" required 
      value={full_name} 
      onChange={handleInputChange}
    
      />
    </div>
  </div>


    <div class="row">
    <div class="col-25">
      <label for="lname">Age</label>
    </div>
    <div class="col-75">
      <input 
     type="number" id="age" name="age" required
     value={age} 
     onChange={handleInputChange}
      />
    </div>
  </div>


  <div class="row">
    <div class="col-25">
      <label for="country" class='imgtext'>School</label>
    </div>
    <div class="col-75">
      <input 
      type="text" id="school" name="school" required
      value={school} 
      onChange={handleInputChange}
      />
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label class='imgtext'>Parent Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" id="parent_name"name="parent_name" required
      value={parent_name} 
      onChange={handleInputChange}
      />
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label  class='imgtext'>Parent/Student Contact</label>
    </div>
    <div class="col-75">
      <input 
     type="number" id="parent_contact" name="parent_contact" required
     value={parent_contact} 
     onChange={handleInputChange}
      />
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label  class='imgtext'>Comments </label>
    </div>
    <div class="col-75">
      <input 
    type="text" id="comments" name="comments" required
    value={comments} 
    onChange={handleInputChange}
      />
    </div>
  </div>
  <br/>
 
    
    <input  type="submit"  value="Add"/>
   
  
  
  </form>
  </div>
       

        
    </div>
  
  )
}

export default CreateAN