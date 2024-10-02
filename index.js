const https = require("http");

const server = https.createServer()

server.listen("5000" , ()=> console.log("server is running on port 3000"))

