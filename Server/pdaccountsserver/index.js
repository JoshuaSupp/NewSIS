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


//table pd_saccounts (getting data from pd_saccounts)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM pd_saccounts";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Delete admin Data  
app.delete("/api/remove/:id", (req,res)=>{
    const {id} = req.params;
    const sqlRemove =
     "DELETE FROM pd_saccounts WHERE id = ?";
    db.query(sqlRemove, id, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


//Add pdaccount Data
app.post("/api/post", (req,res)=>{
    const {index_no,student_name,username,password} = req.body;
    const sqlInsert = "INSERT INTO pd_saccounts (index_no,student_name,username,password) VALUES (?,?,?,?)";
    db.query(sqlInsert,[index_no,student_name,username,password], (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})


//Update pd_saccounts  data
app.get('/editpds/:id', (req,res) =>{
    const sqlGet = "Select * FROM pd_saccounts WHERE id = ?"
    const id = req.params.id;
    db.query(sqlGet,[id], (err, result) => {
        if(err) return res.json({Error: err});
        return res.json(result);
    })
  })
  
  app.put('/updatepds/:id', (req, res) => {
    const sqlGet = "UPDATE pd_saccounts SET `student_name` = ?, `username` = ?, `password` = ?  WHERE id = ?"
    const id = req.params.id;
    db.query(sqlGet, [req.body.student_name, req.body.username,req.body.password,   id], (err, result) =>{
        if(err) return res.json("Errorr");
        return res.json({updated: true})
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



app.listen(5006, () =>{
    console.log("Server is running on port 5006 (pdaccountserver)")
})