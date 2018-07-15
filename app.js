"use strict";

const pug = require('pug');
const express = require('express');
const app = express();

const port = 3000;

app.set('view engine','pug');
app.use(express.static('www'));
app.set('views', __dirname + '/views');
app.get('/', function(req, res){
  res.render("index");
  res.render("mission");
});

app.listen(port, () => console.log('Tesselating gardens listening on ' + port));
