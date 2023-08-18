// const http = require('http');

// const server = http.createServer((req, res) =>{
//     console.log(req.url, req.method, req.headers);
//     //process.exit();
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title> My 1st HTML Code</title></head>');
//     res.write('<body>Hello from my Node.js Server</body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(3000);






// const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   if (url === '/home') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Welcome home');
//   } else if (url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Welcome to About Us page');
//   } else if (url === '/node') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Welcome to my Node.js project');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('Page not found');
//   }
// });

// server.listen(3000);



const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);


