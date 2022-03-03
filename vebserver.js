const http = require('http')

const port = 3000;
const hostname = '192.168.1.159'; 

const server = http.createServer ((request, response) => { 
  response.statusCode =200;
  response.setHeader('Content-Type', 'text/plain');

});
    
server.listen (port, hostname, () =>{console.log (`servser running at http://${hostname}:${port}/` );
});


const requestHandler = (request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8;");
  if (request.url === "/home" || request.url === "/"){
  response.write("<h2>Home</h2>");
  fs.appendFileSync("new.txt",'home');
  }
  else if (request.url == "/about"){
  response.write("<h2>About</h2>");
  fs.appendFileSync("new.txt",'home');
  }
  else if (request.url == "/contact"){
  response.write("<h2>Contacts</h2>");
  }
  else{
  response.write("<h2>Not found</h2>");
  }
  response.end();
  };
  const fs = require("fs");
fs.appendFileSync("new.txt", "Привет!");
fs.appendFile("new.txt", "Привет М!", function(error){
if(error) throw error; 
console.log("Запись файла завершена. Содержимое файла:");
let data = fs.readFileSync("new.txt", "utf8");
console.log(data); 
});

  
  http.createServer(requestHandler).listen(3000);
  

