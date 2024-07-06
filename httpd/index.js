const http = require('http');
console.log(http)

const server = http.createServer((req,res)=>{
    // console.log("started");
    // res.setHeader("hello","res");
    // res.end("Hello i am response")

    if(req.url==='/'){
        res.end("Home Page")
    }
    if(req.url==="./about"){
        res.end("This is about page")
    }
})

server.listen(3000,()=>{
    console.log("server stated at port 300");
})