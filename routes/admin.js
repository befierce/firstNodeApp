//adding routes saperately 
const express = require('express');//importing express 

const router = express.Router(); //calling router which is the functionality of express js

router.get('/add-product',(req, res, next) => {
    //console.log('in 1st middleware');
    res.send('<form action ="/product" method = "POST"><input type = "text" name = "title"><input type = "text" name = "size"><button type = "submit">Add Product</button></form>');
});

router.post('/product',(req, res, next) => {
    console.log(req.body)//body needs to be parsed
    res.redirect('/');
});


module.exports = router;//router will be a middleware function