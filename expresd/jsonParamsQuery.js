const express =require('express');
const app = express();
const phone = require('./data')


app.get("/",(req,res)=>{
//     res.json([{
//         firstName:"kishan",
//         lastName:"Upadhyay"
//     },
//     {
//         firstName:"abc",
//         lastName:"def"
//     }

// ])


//------------------------------directly use json data
// res.json(phone)

//-------------------------use real life scenerio


res.send('<h1>Home Page</h1><a href="/api/phone">Phone</a>')


})


app.get('/api/phone',(req,res)=>{

    const newItem = phone.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.json(newItem);
})

app.listen(3000,()=>{
    console.log("port is up at 3000")
})