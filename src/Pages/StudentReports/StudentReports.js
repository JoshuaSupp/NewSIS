import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './StudentReports.css'

const StudentReports = () => {
  return (
    <div id='studentreport'>
        <Sidebar>
            <h2 className='streports'>Student Reports</h2>
            
            <div>
            <button  class='kxbutton-19'>
                A* Students From KX
            </button>
            </div>
           
           <div>
            <button class='anbutton-19'>
                A* Students From AN
            </button>
            </div>

            <div>
            <button class='pdbutton-19'>
                A* Students From PD
            </button>
            </div>
          
            
        </Sidebar>
    </div>
  )
}

export default StudentReports