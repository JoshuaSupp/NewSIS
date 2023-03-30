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


//table kx_saccounts (getting data from kx_saccounts)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM kx_saccounts";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Delete admin Data  
app.delete("/api/remove/:id", (req,res)=>{
    const {id} = req.params;
    const sqlRemove =
     "DELETE FROM kx_saccounts WHERE id = ?";
    db.query(sqlRemove, id, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})

//Add kxaccount Data
app.post("/api/post", (req,res)=>{
    const {index_no,student_name,username,password} = req.body;
    const sqlInsert = "INSERT INTO kx_saccounts (index_no,student_name,username,password) VALUES (?,?,?,?)";
    db.query(sqlInsert,[index_no,student_name,username,password], (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})




app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO kx_saccounts (index_no,student_name,username,password) VALUES ('KX1','Spencer Styles','spenstyles','spens123')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})



app.listen(5004, () =>{
    console.log("Server is running on port 5004 (kxaccountserver)")
})