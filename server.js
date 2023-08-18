const http = require('http');
const express = require('express');

const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log('print1');
     // Don't forget to call next() to pass control to the next middleware
    res.send('<h1> hello from 1st middleware </h1>');
    next();
});

app.use((req, res, next) => {
    console.log('print2')
});

const server = http.createServer(app);

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
