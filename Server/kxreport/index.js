const express = require('express');
const mysql = require('mysql2');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5010;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', 
  database: 'sisdb' 
});

connection.connect(error => {
  if (error) throw error;
  console.log('Connected to MySQL database');
});

// Route to generate and download PDF
app.get('/api/pdf', (req, res) => {
  // Fetch data from MySQL table
  connection.query('SELECT * FROM kx_registry', (error, results) => {
    if (error) throw error;

    // Create a new PDF document
    const doc = new PDFDocument();

    // Pipe the PDF document to a writable stream
    const stream = fs.createWriteStream('output.pdf');
    doc.pipe(stream);

    // Write table data to the PDF document
    doc.fontSize(14).text('Table Data:', { underline: true });
    results.forEach(row => {
      doc.fontSize(12).text(`ID: ${row.id}, IndexNo: ${row.index_no}, StudentName: ${row.full_name}, TotalGrade: ${row.total_grade}`);
    });

    // End the PDF document and send it as response
    doc.end();
    stream.on('finish', () => {
      res.download('output.pdf', 'table_data.pdf', error => {
        if (error) throw error;
        console.log('PDF downloaded successfully');
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
