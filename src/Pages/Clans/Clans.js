import React from 'react'
import './Clans.css'
import Navbar from '../../Components/Navbar/Navbar';


const Clans = () => {
  return (
    <div >

        <Navbar/>
    <table style={{marginTop:"8%",marginInlineStart:"30%"}}>

    <tr style={{ lineHeight: "80px", backgroundColor: "#F16E6E" }}>
          <th>Clans</th>
        </tr>
      <tbody>
        
        <tr>
       <td> <a href='./ANRegistry'>Analytics</a></td>
        </tr>
        <tr>
        <td ><a href='./KXRegistry'>Knowledge explorers</a></td>
        </tr>
        <tr>
        <td ><a href='./PDRegistry'>Product design</a></td>
        </tr>
       
      </tbody>
    </table>
  </div>
  
  )
}

export default Clans