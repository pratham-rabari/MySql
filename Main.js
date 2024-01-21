const express = require("express");
const app=express();
const bodyParser = require("body-parser");
const db = require("./db")
const controller = require("./controller")

app.use(bodyParser.json())

db.sequelize.sync();

app.get("/",(req,res)=>{
res.send("hello world")
})

app.post("/create",(req,res)=>{
  controller.createcustomer(req,res);
})

app.get("/all",(req,res)=>{
    controller.findall(req,res);
})

app.get("/byemail/:email",(req,res)=>{
    controller.findbyemail(req,res);
})

app.put("/update",(req,res)=>{
    controller.update(req,res);
})

app.delete("/delete/:email",(req,res)=>{
    controller.deleted(req,res);
})

app.listen("3000",()=>{
    console.log("server running on 3000")
})