import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const Reports = () => {
  return (
    <div >

    <Navbar/>
<table style={{marginTop:"3%",marginInlineStart:"30%"}}>

<tr style={{ lineHeight: "80px", backgroundColor: "#F16E6E" }}>
      <th>Reports</th>
    </tr>
  <tbody>
    
    <tr>
    <td> <a href='./ANGradeReports'>AN Student Grade Report</a></td>
    </tr>
    <tr>
    <td> <a href='./KXGradeReports'>KX Student Grade Report</a></td>
    </tr>
    <tr>
    <td> <a href='./PDGradeReports'>PD Student Grade Report</a></td>
    </tr>
    <tr>
    <td> <a href='./ANCommentReports'>AN Student Comments Report</a></td>
    </tr>
    <tr>
    <td> <a href='./KXCommentReports'>KX Student Comments Report</a></td>
    </tr>
    <tr>
    <td> <a href='./PDCommentReports'>PD Student Comments Report</a></td>
    </tr>
   
  </tbody>
</table>
</div>
  )
}

export default Reports