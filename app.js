"use strict";

const pug = require('pug');
const express = require('express');
const app = express();

const port = 2000;

app.set('view engine','pug');
app.use(express.static('www'));
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render("index"))
app.get('/about', (req, res) => res.render("about"))
app.get('/gallery', (req, res) => res.render("gallery"))
app.get('/mission', (req, res) => res.render("mission"))

app.listen(port, console.log("tessellating gardens is listening on port "+ port));
