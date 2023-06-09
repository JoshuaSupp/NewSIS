const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

// Create a MySQL connection pool
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "sisdb",
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Check username availability
const checkUsernameAvailability = (username, callback) => {
    // Execute a MySQL query to check if the username exists
    const query = `SELECT * FROM admin WHERE username = ?`;
    db.query(query, [username], (err, results) => {
        if (err) {
            // Handle any errors
            callback(err);
        } else {
            // Return the results to the callback
            callback(null, results);
        }
    });
};

// API route to check username availability
app.post("/api/checkUsernameAvailability", (req, res) => {
    const { username } = req.body;

    checkUsernameAvailability(username, (err, results) => {
        if (err) {
            console.error("Error checking username:", err);
            res.status(500).json({ error: "Internal server error" });
        } else {
            if (results.length > 3) {
                // Username already exists
                res.json({ available: false });
            } else {
                // Username is available
                res.json({ available: true });
            }
        }
    });
});

// API route to get admin data
app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM admin";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// API route to add admin data
app.post("/api/post", (req, res) => {
    const { username, password, role } = req.body;
    const sqlInsert = "INSERT INTO admin (username,password,role) VALUES (?,?,?)";
    db.query(sqlInsert, [username, password, role], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send("Admin data added successfully");
        }
    });
});

// API route to delete admin data
app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM admin WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send("Admin data deleted successfully");
        }
    });
});


//Update admin  data
app.get('/editad/:id', (req,res) =>{
    const sqlGet = "Select * FROM admin WHERE id = ?"
    const id = req.params.id;
    db.query(sqlGet,[id], (err, result) => {
        if(err) return res.json({Error: err});
        return res.json(result);
    })
  })
  
  app.put('/updatead/:id', (req, res) => {
    const sqlGet = "UPDATE admin SET `password` = ?, `role` = ?  WHERE id = ?"
    const id = req.params.id;
    db.query(sqlGet, [req.body.password, req.body.role,  id], (err, result) =>{
        if(err) return res.json("Errorr");
        return res.json({updated: true})
    })
  })
  

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000 (adminserver)");
});
