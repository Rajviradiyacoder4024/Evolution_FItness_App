import express from "express";
import mysql from 'mysql';

const app = express();

app.listen(5000,()=>{
    console.log("Connected to backend")
})

/*const express = require('express');
const connection = require('./config');
const app = express();

app.use(express.json());

app.get("/w",(req,res)=>{
    connection.query("select * from water_intake_schedule", (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }

      });
});

app.post("/w",(req,res)=>{
    const data = req.body
    connection.query("INsert INTO water_intake_schedule SET ?",data,(error,result,fileds)=>{
        if(error){
            res.send(error);
        }  
        else{
            res.send(result); 
        }  
    });
});

app.delete();

app.get("/water",(req,res)=>{
    connection.query("select * from  water_intake", (err, result) => {
        if (err){
            res.send(err);
        }
        else{
            res.send(result);
        }

      });
});




app.listen(5000);*/