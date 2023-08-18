//adding routes saperately 
const express = require('express');//importing express 

const router = express.Router(); //calling router which is the functionality of express js


//admin/add-product=> get Request
router.get('/add-product',(req, res, next) => {
    //console.log('in 1st middleware');
    res.send('<form action ="/admin/add-product" method = "POST"><input type = "text" name = "title"><input type = "text" name = "size"><button type = "submit">Add Product</button></form>');
});
//admin/add-product => POST request
router.post('/add-product',(req, res, next) => {
    console.log(req.body)//body needs to be parsed
    res.redirect('/shop');
});


module.exports = router;//router will be a middle