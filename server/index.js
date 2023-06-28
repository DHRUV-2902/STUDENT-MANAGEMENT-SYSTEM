const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"student"
});


app.post("/save",(req,res)=>{

    let data=[req.body.rno,req.body.name,req.body.marks];
    let sql ="insert into student values(?,?,?)";
    con.query(sql,data,(err,result)=>{
        if(err)   res.send(err);
        else      res.send(result);
    })
})

app.get("/getdata",(req,res)=>{

    
    let sql ="select * from student ";
    con.query(sql,(err,result)=>{
        if(err)   res.send(err);
        else      res.send(result);
    })
})

app.delete("/remove",(req,res)=>{

    let data = [req.body.rno]
    console.log(data);
    let sql ="delete from student where rno=?";
    con.query(sql,data,(err,result)=>{
        if(err)   res.send(err);
        else      res.send(result);
    })
})

app.put("/modify",(req,res)=>{

    let data=[req.body.name,req.body.marks,req.body.rno];
    let sql ="update student set name=?, marks =?  where rno=?";
    con.query(sql,data,(err,result)=>{
        if(err)   res.send(err);
        else      res.send(result);
    })
})


app.listen(9000,()=>{console.log("ready to serve at @9000")});
