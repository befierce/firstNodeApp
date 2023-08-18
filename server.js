const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');//importing the body parser

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

// Middleware function
app.use('/add-product',(req, res, next) => {
    //console.log('in 1st middleware');
    res.send('<form action ="/product" method = "POST"><input type = "text" name = "title"><input type = "text" name = "size"><button type = "submit">Add Product</button></form>');
});

app.post('/product',(req, res, next) => {
    console.log(req.body)//body needs to be parsed
    res.redirect('/');
});
app.use('/',(req, res, next)=>{
    res.send('<h1>Hello From Express</h1>')
})



// const server = http.createServer(app);

// server.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });
app.listen(4000);
