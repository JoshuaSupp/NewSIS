const express = require("express")
const mysql = require("mysql2")
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "sisdb"
})






//for login
app.post("/login", (req,res) => {

  const username = req.body.username
  const password = req.body.password

  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [username,password],
    (err, result) => {

      if (err){
        res.send({err: err});
      } 
        if (result.length>0){
          res.send(result)
        } 
        else{
          res.send({message: "Wrong Username/Password"})
        }
    }
   ); 
});


app.listen(3002,() =>{
  console.log("loginserver 3002")
});