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

//table class_name (getting data from class_name)
app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * FROM admin";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

//Add Admin Data
app.post("/api/post", (req,res)=>{
    const {username,password,role} = req.body;
    const sqlInsert = "INSERT INTO admin (username,password,role) VALUES (?,?,?)";
    db.query(sqlInsert,[username,password,role], (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})

//Delete admin Data  
app.delete("/api/remove/:admin_id", (req,res)=>{
    const {admin_id} = req.params;
    const sqlRemove =
     "DELETE FROM admin WHERE admin_id = ?";
    db.query(sqlRemove, admin_id, (error, result)=>{
        if(error){
            console.log(error);
        }
    })

})




app.get("/", (req,res)=>{
    // const sqlInsert = "INSERT INTO admin (username,password,role) VALUES ('Admin','1234','Lectuerer')";
    // db.query(sqlInsert,(error,result)=>{
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express")
    // })
    
})

app.listen(5000, () =>{
    console.log("Server is running on port 5000 (adminserver)")
})