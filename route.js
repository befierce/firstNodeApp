const fs = require('fs');

const requestHandeler = (req,res) => {

    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');

        // Read the content of 'message.txt' and display it if it exists
        fs.readFile('message.txt', 'utf8', (err, content) => {

            res.write('<p>' + content + '</p>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        });
    }

    if (req.url === '/message' && method === 'POST') {
        // fs.writeFileSync('message.text', 'Dummy message');
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];//splitting  becoz the parsed body will be in key value pairs key = value
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302,
                    res.setHeader('location', '/'),
                    res.end()
            });
        });
    }

}
//first way
module.exports = {
    handler: requestHandeler,
    someText:  '"Never Give Up"'
}
//second way

// module.exports.handler = requestHandeler;
// module.exports.someText = 'Never Give UP';

//third way

// exports.handler = requestHandeler;
// exports.someText = 'Never Give UP';
