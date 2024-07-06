const express = require("express");
const app=express();
const path=require('path');


app.get("/",(req,res)=>{
    res.send("<i>helo this is kishan</i>")
})



app.get("/contact",(req,res)=>{
    res.send('<h1>contact page</h1>')
})


app.get("/path",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.get("/jsonexample",(req,res)=>{
    res.json([
        {
            firsname:"abc",
            lastName:"def"
        },
        {
            firsname:"kishan ",
            lastName:"upadhyay"
        }
    ])
})
app.listen(3000,()=>{
    console.log("server is running at 3000")
})