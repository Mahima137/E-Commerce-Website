const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  });
  

router.post('/add-product', (req, res, next) => {    /// same path can be used bcoz method differ (get in above n post in below)
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;