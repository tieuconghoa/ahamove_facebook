const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('group');
})
app.get('/post', function(req, res){
  res.render('post');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})