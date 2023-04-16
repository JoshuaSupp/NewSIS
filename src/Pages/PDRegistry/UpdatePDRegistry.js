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
    const [parent_email, setparentemail] = useState('');
    const [comments, setcomments] = useState('');
    const[error, setError] = React.useState(false);
    const navigate = useNavigate();
    const [value, setValue] = useState('')

    useEffect(()=> {
        axios.get('http://localhost:5003/editreg/'+id)
        .then(res => {
            setfullname(res.data[0].full_name); 
            setage(res.data[0].age);
            setschool(res.data[0].school); 
            setparentname(res.data[0].parent_name); 
            setcontact(res.data[0].parent_contact);
            setparentemail(res.data[0].parent_email);
            setcomments(res.data[0].comments);

        })
        .catch(err => console.log(err));
    }, [])

   

    const handleSubmit = (e) =>{
      const {name, value} = e.target;
      // Validate if the input value is a positive number
      if (value < 0) {
        // If input value is negative, set to empty string
        setValue('');
      } else {
        setValue(value);
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
        e.preventDefault();
        if (   !full_name || !age || !school || !parent_name || !parent_contact || !parent_email || !comments ){
          setError(true);
          return false
        }else{
        axios.put('http://localhost:5003/updatereg/'+id, {full_name,age,school,parent_name,parent_contact,parent_email,comments})
        .then(res => {
            if(res.data.updated){
                navigate('../PDRegistry')
            }else{
                alert('Not Updated');
            }
        })
      }
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

 <button class="button button1"><a href="/PDRegistry">Back To PD Registry</a></button>
    <h1>Update PD Student Registry</h1>
        <div style={{marginTop:'135px', alignItems:'center',textAlign:'center'}}class="container">
  
  <form id='formanup' onSubmit={handleSubmit}>

  <div class="row">
    <div class="col-25">
      <label for="lname">Student Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name"  
      value={full_name} 
      onChange={e => setfullname(e.target.value)}
    
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
      type="number" name="full_name"  
      value={age} 
      onChange={e => setage(e.target.value)}
      min={0}
      />
    </div>
  </div>
  {error && !age && <h3 class='invalid'> Enter Valid Age!! </h3>}
  
  <div class="row">
    <div class="col-25">
      <label for="lname">School</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name"  
      value={school} 
      onChange={e => setschool(e.target.value)}
    
      />
    </div>
  </div>
  {error && !school && <h3 class='invalid' style={{marginTop:'3%'}}> Enter Valid School!! </h3>}

  <div class="row">
    <div class="col-25">
      <label for="lname">Parent Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name"  
      value={parent_name} 
      onChange={e => setparentname(e.target.value)}
    
      />
    </div>
  </div>
  {error && !parent_name && <h3 class='invalid'  > Enter Valid Parent Name!! </h3>}

  <div class="row">
    <div class="col-25">
      <label for="lname">Customer Contact</label>
    </div>
    <div class="col-75">
      <input 
      type="number" name="full_name"  
      value={parent_contact} 
      onChange={e => setcontact(e.target.value)}
      min={0}
      />
    </div>
  </div>
  {error && !parent_contact && <h3 class='invalid'style={{marginTop:'-2%',marginBottom:'2%'}} > Enter Valid Contact Number!! </h3>}


  <div class="row">
    <div class="col-25">
      <label for="lname">Parent Email</label>
    </div>
    <div class="col-75">
      <input 
      type="email" name="full_name"  
      value={parent_email} 
      onChange={e => setparentemail(e.target.value)}
      />
    </div>
  </div>
  {error && !parent_email && <h3 class='invalid'style={{marginTop:'1%'}} > Enter Valid Parent Email!! </h3>}
  
  <div class="row" >
    <div class="col-25" >
      <label for="lname">Comments</label>
    </div>
    <div class="col-75">
      <textarea 
      type="text" name="full_name"  
      value={comments} 
      onChange={e => setcomments(e.target.value)}
      />
    </div>
  </div>
  {error && !comments && <h3 class='invalid' style={{marginTop:'2%'}}> Enter Comment!! </h3>}
  

  <br/>
 
    
  <input  type="submit"  value="Update"/>
   
  
  
  </form>
  </div>
    </div>
  )
}

export default UpdateANRegistry