import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const Reports = () => {
  return (
    <div >

    <Navbar/>
<table style={{marginTop:"8%",marginInlineStart:"30%"}}>

<tr style={{ lineHeight: "80px", backgroundColor: "#F16E6E" }}>
      <th>Reports</th>
    </tr>
  <tbody>
    
    <tr>
    <td> <a href='./ANReports'>AN Student Grade Reports</a></td>
    </tr>
    <tr>
    <td> <a href='./KXReports'>KX Student Grade Reports</a></td>
    </tr>
    <tr>
    <td> <a href='./PDReports'>PD Student Grade Reports</a></td>
    </tr>
   
  </tbody>
</table>
</div>
  )
}

export default Reports