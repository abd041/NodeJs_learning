const https = require("http");
const fs = require("fs")
const server = https.createServer()
const path = require("path")


const readfile = fs.readFileSync("./Sample.txt" , "utf-8")

console.log(readfile)
 fs.writeFile("FileName" , "This is the file content" , ()=>{
    console.log("file create successfully")
})


// This will be used to find the file name extension

const extension = path.extname("index.py")
console.log(extension)

const { sumOfNumbers, multiplyOfNumbers } = require('./Sum');
 
sumOfNumbers(20 , 10)
multiplyOfNumbers(10 , 15)


server.listen("5000" , ()=> console.log("server is running on port 3000"))

