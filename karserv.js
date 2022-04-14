const fs = require("fs");
const http = require("http");


const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>hello world</h2>");
        fs.appendFileSync("ggwp.txt", 'переход в ggwp\n');
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");


    } else if (request.url == "/todos") {
        let content = fs.readFileSync("spisokk del.js");
        response.writeHead(200, {
            'Content-Type': 'package.json'
        })

    }
};
http.createServer(requestHandler).listen(3000);