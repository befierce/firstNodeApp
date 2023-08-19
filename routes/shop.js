const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    // Corrected path to the HTML file
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
});

module.exports = router;
