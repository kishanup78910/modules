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

//-------------------------------------Query Params-----------------------------------
//to get a single product using params

// app.get('/api/phone/:id',(req,res)=>{
//     const {id}=req.params;
//     console.log(req.params);
//     const singleItem = phone.find((product)=>product.id==Number(id))
//     res.json(singleItem);
// })



// app.get('/api/phone',(req,res)=>{

//     const newItem = phone.map((product)=>{
//         const {id,name,image}=product;
//         return {id,name,image}
//     })
//     res.json(newItem);
// })

//-------------------------------------------------- Query String--------------------------------------------
app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    let sortedPhone = [...phone];
    const {search,limit}=req.query;

    if(search){
        sortedPhone=sortedPhone.filter((product)=>{
            return product.name.startsWith("A");
        })
    }


    if (limit) {
        sortedPhone = sortedPhone.slice(0, Number(limit));
    }
    res.json(sortedPhone)
})

app.listen(3000,()=>{
    console.log("port is up at 3000")
})