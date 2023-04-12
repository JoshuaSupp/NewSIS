import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';


function UpdateANRegistry(){

    const {id} = useParams(); 
    const[full_name, setfullname] = useState('');
    const [age, setage] = useState('');
    const [school, setschool] = useState('');
    const [parent_name, setparentname] = useState('');
    const [parent_contact, setcontact] = useState('');
    const [comments, setcomments] = useState('');
    

    useEffect(()=> {
        axios.get('http://localhost:5003/editreg/'+id)
        .then(res => {
            setfullname(res.data[0].full_name); 
            setage(res.data[0].age);
            setschool(res.data[0].school); 
            setparentname(res.data[0].parent_name); 
            setcontact(res.data[0].parent_contact); 
            setcomments(res.data[0].comments);

        })
        .catch(err => console.log(err));
    }, [])

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:5003/updatereg/'+id, {full_name,age,school,parent_name,parent_contact,comments})
        .then(res => {
            if(res.data.updated){
                navigate('../PDRegistry')
            }else{
                alert('Not Updated');
            }
        })
    }

  return (
    <div class='add' >
        <Navbar/>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,200&display=swap" rel="stylesheet"></link>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;1,200&display=swap" rel="stylesheet"></link>

 <button class="button button1"><a href="/ANRegistry">Back To AN Registry</a></button>
    <h1>Update PD Student Registry</h1>
        <div style={{marginTop:'100px', alignItems:'center',textAlign:'center'}}class="container">
  
  <form id='formanup' onSubmit={handleSubmit}>

  <div class="row">
    <div class="col-25">
      <label for="lname">Student Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name" required 
      value={full_name} 
      onChange={e => setfullname(e.target.value)}
    
      />
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">Age</label>
    </div>
    <div class="col-75">
      <input 
      type="number" name="full_name" required 
      value={age} 
      onChange={e => setage(e.target.value)}
    
      />
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">School</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name" required 
      value={school} 
      onChange={e => setschool(e.target.value)}
    
      />
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label for="lname">Parent Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name" required 
      value={parent_name} 
      onChange={e => setparentname(e.target.value)}
    
      />
    </div>
  </div>
    

  <div class="row">
    <div class="col-25">
      <label for="lname">Customer Contact</label>
    </div>
    <div class="col-75">
      <input 
      type="number" name="full_name" required 
      value={parent_contact} 
      onChange={e => setcontact(e.target.value)}
    
      />
    </div>
  </div>

  <div class="row" >
    <div class="col-25" >
      <label for="lname">Comments</label>
    </div>
    <div class="col-75">
      <textarea 
      type="text" name="full_name" required 
      value={comments} 
      onChange={e => setcomments(e.target.value)}
    
      />
    </div>
  </div>

  <br/>
 
    
  <input  type="submit"  value="Update"/>
   
  
  
  </form>
  </div>
    </div>
  )
}

export default UpdateANRegistry