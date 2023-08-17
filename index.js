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
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (!err) {
        const messages = data.split('\n').filter(msg => msg.trim() !== '');
        res.write('<body>');
        res.write('<h1>Messages</h1>');
        res.write('<ul>');
        messages.forEach(message => {
          res.write(`<li>${message}</li>`);
        });
        res.write('</ul>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
      }
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      
      fs.appendFile('message.txt', message + '\n', err => {
        if (!err) {
          res.writeHead(302, { 'Location': '/' });
          return res.end();
        }
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3000);


