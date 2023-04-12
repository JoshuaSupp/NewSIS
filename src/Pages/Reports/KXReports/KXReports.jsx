import React from 'react';
import axios from 'axios';

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
    <div>
      <button onClick={handleDownload}>Download KX Students</button>
    </div>
  );
};

export default PdfDownload;
