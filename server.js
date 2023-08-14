const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><form action="/message" method = "POST"><input type = "text" name = "message"><button type = "submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  } 

  if(req.url === '/message' && method ==='POST'){
    fs.writeFileSync('message.text', 'Dummy message');
    res.statusCode = 302;
    res.setHeader('location','/');
    return res.end();
  }

});


server.listen(4000);
