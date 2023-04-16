import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateKXStudentG = () => {
    const {id} = useParams(); 
    const[full_name, setfullname] = useState('');
    const [puzzle_01, setpuzzle01] = useState('');
    const [puzzle_02, setpuzzle02] = useState('');
    const [puzzle_03, setpuzzle03] = useState('');
    const [puzzle_04, setpuzzle04] = useState('');
    const [puzzle_05, setpuzzle05] = useState('');
    const [puzzle_06, setpuzzle06] = useState('');
    const [total_grade, settotalgrade] = useState('');

    useEffect(()=> {
        axios.get('http://localhost:5001/edit/'+id)
        .then(res => {
            setfullname(res.data[0].full_name); 
            setpuzzle01(res.data[0].puzzle_01);
            setpuzzle02(res.data[0].puzzle_02); 
            setpuzzle03(res.data[0].puzzle_03); 
            setpuzzle04(res.data[0].puzzle_04); 
            setpuzzle05(res.data[0].puzzle_05);
            setpuzzle06(res.data[0].puzzle_06);
            settotalgrade(res.data[0].total_grade);   

        })
        .catch(err => console.log(err));
    }, [])

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:5001/update/'+id, {full_name,puzzle_01,puzzle_02,puzzle_03,puzzle_04,puzzle_05,puzzle_06,total_grade})
        .then(res => {
            if(res.data.updated){
                navigate('../KXStudentG')
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

 <button class="button button1"><a href="/KXStudentG">Back To KX Student Grades</a></button>
    <h1>Update KX Student Grades</h1>
        <div style={{marginTop:'270px', alignItems:'center',textAlign:'center'}}class="container">
  
  <form id='formanup' onSubmit={handleSubmit}>
  <div class="row">
    <div class="col-25">
      <label for="lname">Student Name</label>
    </div>
    <div class="col-75">
      <input 
      type="text" name="full_name" required 
      value={full_name} 
     
    
      />
    </div>
  </div>


    <div class="row">
    <div class="col-25">
      <label for="lname">Puzzle 01</label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}} onChange={e => setpuzzle01(e.target.value)}>
            <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={puzzle_01}
            
    </select> 
    </div>
  </div>


  <div class="row">
    <div class="col-25">
      <label for="country" class='imgtext'>Puzzle 02</label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}}   onChange={e => setpuzzle02(e.target.value)}>
            <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={puzzle_02}
          
    </select> 
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label class='imgtext'>Puzzle 03</label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}}  onChange={e => setpuzzle03(e.target.value)}>
            <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={puzzle_03}
           
    </select> 
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label  class='imgtext'>Puzzle 04</label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}} onChange={e => setpuzzle04(e.target.value)}>
            <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={puzzle_04}
            
    </select> 
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label  class='imgtext'>Puzzle 05 </label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}}  onChange={e => setpuzzle05(e.target.value)}>
             <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={puzzle_05}
           
    </select> 
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label  class='imgtext'>Puzzle 06 </label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}}     onChange={e => setpuzzle06(e.target.value)}
>
            <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={puzzle_06}
           
    </select> 
   
     
    </div>
  </div>

  <div class="row">
    <div class="col-25">
      <label  class='imgtext'>Total Grade </label>
    </div>
    <div class="col-75">
    <select name="Progress" id="progress" style={{marginLeft:'220%'}} required onChange={e => settotalgrade(e.target.value)}>
            <option value="NG">NG</option>
            <option  value="E">E</option>
            <option  value="C">C</option>
            <option  value="B">B</option>
            <option  value="A">A</option>
            <option  value="A*">A*</option>
            value={total_grade}
           
    </select> 
   
    </div>
  </div>

  <br/>
 
    
  <input  type="submit"  value="Update"/>
   
  
  
  </form>
  </div>
    </div>
)
}

export default UpdateKXStudentG