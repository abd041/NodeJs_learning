const https = require("http");

const server = https.createServer()


// sum of two numbers

const sumOfNumbers =(a,b)=>{
    return( console.log(`sum of ${a} and ${b} is ${a + b}`))
}
 
sumOfNumbers(0 , 50)

server.listen("5000" , ()=> console.log("server is running on port 3000"))

