const { create } = require('domain');
let fs = require('fs');
let http = require('http');
let server = http.createServer(function (req, res){
        if(req.url == '/'){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>This is Home Page.</h1>");
            res.end();
        }
        else if(req.url == '/about'){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>This is About Page.</h1>");
            res.end();
        }
        else if(req.url == '/contact'){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>This is Contact Page.</h1>");
            res.end();
        }
        else if(req.url == '/file-write'){
            fs.writeFile("demo.txt", "hello world", function(error){
                if(error){
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write("File write fail.");
                    res.end();
                }
                else{
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write("File write success.");
                    res.end();
                }
            });
        }
    });
server.listen(3000);
console.log("Server Run Succesful");