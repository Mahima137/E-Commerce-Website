const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);    // "/admin" give common to outsource so that not repated in admin.js
app.use('/shop',shopRoutes);    //same as admin path do ^

app.use((req, res, next) => {
    res.status(404).send('<html>Page Not Found!</html>');
});

app.listen(3000);