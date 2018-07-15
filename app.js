"use strict";
"use strict";
var port = 3000
const pug = require('pug');
const express = require('express');
const app = express();
app.set('view engine','pug');
app.use(express.static('www'));
app.set('views', __dirname + '/views');
app.get('/', function(req, res){
  res.render("index");
});

app.listen(port, () => console.log('Tesselating gardens listening on ' + port));

}

app.listen(3000)
