const https = require("http");
const server = https.createServer()

const sumOfNumbers = require("./Sum")
 
sumOfNumbers(20 , 10)

server.listen("5000" , ()=> console.log("server is running on port 3000"))

