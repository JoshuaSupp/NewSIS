import React from 'react'
import axios from 'axios';

import Navbar from "../../../Components/Navbar/Navbar";

const PdfDownload = () => {
    const handleDownload = () => {
      axios.get('http://localhost:5001/api/pdf', { responseType: 'blob' })
        .then(response => {
          const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
          const downloadUrl = URL.createObjectURL(pdfBlob);
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = 'table_data.pdf';
          link.click();
        })
        .catch(error => console.error(error));
    };
  
    return (
      <div class='report'>
        <Navbar/>
        <h1 class='angrade'>KX Student Grade Report</h1>
        <img src='/images/downarrow.png' alt='arrow' style={{width:'250px', height:'250px',marginTop:'6%',marginLeft:'40%'}}/>
        <button class='button-64' onClick={handleDownload}>Download KX Students Report</button>
      </div>
    );
  };
  
  export default PdfDownload;