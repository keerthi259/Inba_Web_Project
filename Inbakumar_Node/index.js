const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

   
    console.log(req.url);

    if (req.url === '/') {
            
        fs.readFile( path.join(__dirname,'public', 'index.html'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
         })
    }
    else if (req.url.startsWith('/Images/')) {
        const assetPath = path.join(__dirname, 'public', req.url);
        fs.readFile(assetPath, (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
          }
          const contentType = path.extname(assetPath) === '.png' ? 'image/png' : 'image/jpeg';
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        });
      }
    else if (req.url === '/about') {
            
        fs.readFile( path.join(__dirname,'public', 'about.html'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
         })
    }
    else if (req.url === '/api') {


         fs.readFile( path.join(__dirname,'public', 'db.json'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
         })
        
    }
    else{
         
        fs.readFile( path.join(__dirname,'public', '404.html'),'utf-8', (err,data)=>{
            if (err) throw err;
            // console.log(typeof(data));
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(data);
         })
    }

});

server.listen(7291, () => console.log("yay my server is running"));