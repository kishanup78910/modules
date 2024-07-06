console.log("Add modules")

const add = (a,b)=>{
    return a+b;
}

const sum =add(2,3);

setTimeout(()=>{
    console.log(sum)
},2000)