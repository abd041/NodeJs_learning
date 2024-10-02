const https = require("http");
const fs = require("fs")
const server = https.createServer()


const readfile = fs.readFileSync("./Sample.txt" , "utf-8")

console.log(readfile)

const { sumOfNumbers, multiplyOfNumbers } = require('./Sum');
 
sumOfNumbers(20 , 10)
multiplyOfNumbers(10 , 15)


server.listen("5000" , ()=> console.log("server is running on port 3000"))

