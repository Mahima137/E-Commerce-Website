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



//const http = require('http');
// const server = http.createServer(app);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);