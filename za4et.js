const fs = require("fs");
const http = require("http");


const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>hello world</h2>");
        fs.appendFileSync("hello.txt", 'переход в hello\n');
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");

    } else if (request.url == "/file/1") {
        let content = fs.readFileSync("1.json");
        response.end(content);
    } else if (request.url == "/file/2") {
        let content = fs.readFileSync("2.json");
       
        response.end(content);
    } else if (request.url == "/file/3") {
            let content = fs.readFileSync("3.json");
        
        response.end(content);
    } else if (request.url == "/file/4") {
        let content = fs.readFileSync("4.json");
        
        response.end(content);
    } else if (request.url == "/file/6") {
        let content = fs.readFileSync("6.json");
        
        response.end(content);
    } else if (request.url == "/file/7") {
        let content = fs.readFileSync("7.json");
        
        response.end(content);
    } else if (request.url == "/file/5") {
        let content = fs.readFileSync("5.json");
        
        response.end(content);
    }


};

http.createServer(requestHandler).listen(12000);