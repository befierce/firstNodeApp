const http = require('http');//importing the HTTP
const express = require('express');//importing the expess
const bodyParser = require('body-parser');//importing the body parser

const adminRoutes = require('./routes/admin');//exporting the file we used to keep routing code seperately
const shopRoutes = require('./routes/shop');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware function
app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found<h1>');
})


// const server = http.createServer(app);

// server.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });
app.listen(4000);
