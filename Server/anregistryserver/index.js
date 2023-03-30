const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2")
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: '1234',
    database: 'sisdb'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//table an1e01_registry (getting data from kx1e01_registry)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM an1e01_registry";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Add an1e01_registry Data
app.post("/api/post", (req,res)=>{
    const {index_no,full_name,age,school,parent_name,parent_contact,comments} = req.body;
    const sqlInsert = "INSERT INTO an1e01_registry (index_no,full_name,age,school,parent_name,parent_contact,comments) VALUES (?,?,?,?,?,?,?)";
    db.query(sqlInsert,[index_no,full_name,age,school,parent_name,parent_contact,comments], (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


//Delete an1e01_registry Data  
app.delete("/api/remove/:id", (req,res)=>{
    const {id} = req.params;
    const sqlRemove =
     "DELETE FROM an1e01_registry WHERE id = ?";
    db.query(sqlRemove, id, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO an1e01_registry (index_no,full_name,age,dob,school,student_contact,parent_name,parent_email,parent_contact,address,comments,payments) VALUES ('KX0001','Jadon Smith','16','2006/02/20','Gateway International School','0734734259','Michelle Smith','michellesmith@gmail.com','0723524546','No.20/1,Colombo 06','Start from 2nd week','Full payment done - Rs.45,000')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})


app.listen(5002, () =>{
    console.log("Server is running on port 5002 (anregistry)")
})


