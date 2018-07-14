"use strict";
const express = require('express');
const app = express();


app.set('view engine', 'pug')
app.use(express.static('www/'))
app.get('/', function(req, res) {
    res.render("index", {
        "title": "Tesselating Gardens"
    })
})
app.listen(3000);
