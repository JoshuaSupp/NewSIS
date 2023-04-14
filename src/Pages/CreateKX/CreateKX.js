import React, {useState, useEffect}  from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './CreateKX.css'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'
import Navbar from '../../Components/Navbar/Navbar'


const initialState = {
  indexno:"",
  full_name:"",
  age:"",
  dob:"",
  school:"",
  student_contact:"",
  parent_name:"",
  parent_contact:"",
  parent_email:"",
  address:"",
  comments:"",
 
}


const CreateKX = () => {

  const [state, setState] = useState(initialState);
  const {index_no,full_name,age,school,parent_name,parent_contact,parent_email,comments} = state;
  const navigate = useNavigate();
  const[error, setError] = React.useState(false);
  const [value, setValue] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!index_no || !full_name || !age || !school || !parent_name || !parent_contact || !parent_email || !comments  ){
      toast.error("Please provide value into each field")
      setError(true)
    }else{
      axios.post("http://localhost:5001/api/post", {
        index_no,full_name,age,school,parent_name,parent_contact,parent_email,comments
      }).then(() => {
        setState({
        index_no:"",
        full_name:"",
        age:"",
        school:"",
        parent_name:"",
        parent_contact:"",
        parent_email:"",
        comments:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../KXRegistry"), 500);
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    const Value = e.target.value;

    // Validate if the input value contains any special characters
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    if (regex.test(Value)) {
      // If input value contains special characters, set to previous value
      setValue(value);
    } else {
      setValue(value);
    }
      // Validate if the input value is a positive number
      if (value < 0) {
        // If input value is negative, set to empty string
        setValue('');
      } else {
        setValue(value);
      }
    if (name === 'index_no' && (value.length > 6)){
      return;
    }
    if (name === 'full_name' && (value.length > 25)){
      return;
    }
    if (name === 'age' && (value.length > 2)){
      return;
    }
    if (name === 'school' && (value.length > 32)){
      return;
    }
    if (name === 'parent_name' && (value.length > 20)){
      return;
    }
    if (name === 'parent_contact' && (value.length > 10)){
      return;
    }
    if (name === 'parent_email' && (value.length > 30)){
      return;
    }
    if (name === 'comments' && (value.length > 35)){
      return;
    }
    setState({ ...state, [name]: value });
  }




  return (
    <div class='add'>

    <Navbar/>

    <button class="button button1"><a href="/KXRegistry">Back To KX Registry</a></button>
  
<h1 style={{color:"black",marginLeft: "1.5%"}}>Add KX Students</h1>
  
  
<div style={{marginTop: "120px", background:'#E8E8E8'}}class="container">
<form onSubmit={handleSubmit}>
<div class="row">
  <div class="col-25">
    <label for="fname">Index Number</label>
  </div>
  <div class="col-75">
    <input 
    type="text" id="index_no" name="index_no"  
    value={index_no} 
    onChange={handleInputChange}
    placeholder='index no...'
    />
  </div>
</div>
{error && !index_no && <h3 class='invalid'> Enter Valid Index Number!! </h3>}


<div class="row">
  <div class="col-25">
    <label for="lname">Student Name</label>
  </div>
  <div class="col-75">
    <input 
    type="text" name="full_name"  
    value={full_name} 
    onChange={handleInputChange}
    placeholder='student name...'
    />
  </div>
</div>
{error && !full_name && <h3 class='invalid'> Enter Valid Student Name!! </h3>}


  <div class="row">
  <div class="col-25">
    <label for="lname">Age</label>
  </div>
  <div class="col-75">
    <input 
   type="number" id="age" name="age" 
   value={age} 
   onChange={handleInputChange}
   placeholder='age...'
   min={0}
    />
  </div>
</div>
{error && !age && <h3 class='invalid'> Enter Valid Age!! </h3>}


<div class="row">
  <div class="col-25">
    <label for="country" class='imgtext'>School</label>
  </div>
  <div class="col-75">
    <input 
    type="text" id="school" name="school" 
    value={school} 
    onChange={handleInputChange}
  placeholder='school...'
    />
  </div>
</div>

{error && !school && <h3 class='invalid' style={{marginTop:'3%'}}> Enter Valid School!! </h3>}


<div class="row">
  <div class="col-25">
    <label class='imgtext'>Parent Name</label>
  </div>
  <div class="col-75">
    <input 
    type="text" id="parent_name"name="parent_name" 
    value={parent_name} 
    onChange={handleInputChange}
    placeholder='parent name...'
    />
  </div>
</div>
{error && !parent_name && <h3 class='invalid'  > Enter Valid Parent Name!! </h3>}

<div class="row">
  <div class="col-25">
    <label  class='imgtext'>Parent/Student Contact</label>
  </div>
  <div class="col-75">
    <input 
   type="number" id="parent_contact" name="parent_contact" 
   value={parent_contact} 
   onChange={handleInputChange}
   placeholder='parent contact...'
   min={0}
    />
  </div>
</div>
{error && !parent_contact && <h3 class='invalid'style={{marginTop:'-2%',marginBottom:'2%'}} > Enter Valid Contact Number!! </h3>}


<div class="row">
  <div class="col-25">
    <label  class='imgtext'>Parent Email</label>
  </div>
  <div class="col-75">
    <input 
   type="email" id="parent_email" name="parent_email" 
   value={parent_email} 
   onChange={handleInputChange}
   placeholder='parent email...'
    />
  </div>
</div>
{error && !parent_email && <h3 class='invalid'style={{marginTop:'1%'}} > Enter Valid Parent Email!! </h3>}
  

<div class="row">
  <div class="col-25">
    <label  class='imgtext'>Comments </label>
  </div>
  <div class="col-75">
    <input 
  type="text" id="comments" name="comments" 
  value={comments} 
  onChange={handleInputChange}
  placeholder='comments...'
    />
  </div>
</div>
{error && !comments && <h3 class='invalid' style={{marginTop:'2%'}}> Enter Comment!! </h3>}

<br/>

  
  <input  type="submit"  value="Add"/>
 


</form>
</div>
     

      
  </div>

  )
}

export default CreateKX