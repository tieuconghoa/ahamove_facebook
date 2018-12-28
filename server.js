const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  var url = `http://ahamove.cuongvc.com:8081/api/groups/get`
  request(url, function (err, response, body) {
    if(err){
      res.render('group', {Inforg: null, error :"Error" });
    } else {
      const Inforg = JSON.parse(body)
      if(Inforg.status != 'ok'){
        res.render('group', {Inforg: null, error :"Error" });
      } else {
        res.render('group', {Infor: Inforg, error :"Error" });
      }
    }
  });
})

app.get('/post', function(req, res){
  var group_id = req.query.group_id;
  var url = `http://ahamove.cuongvc.com:8081/api/posts/get_by_group?group_id=${group_id}`
  request(url, function (err, response, body) {
    if(err){
      res.render('post', {Inforp: null, error :"Error" });
    } else {
      const Inforp = JSON.parse(body)
      if(Inforp.status != 'ok'){
        res.render('post', {Inforp: null, error :"Error" });
      } else {
        console.log(group_id);
        console.log(url);
        res.render('post', {Infor: Inforp, error :"Error" });
      }
    }
  });
})

app.get('/user', function(req, res){
  var userId = req.query.userId;
  var url = `http://ahamove.cuongvc.com:8081/api/posts/get_by_user?fbUser=${userId}`
  request(url, function (err, response, body) {
    if(err){
      res.render('user', {Infor: null, error :"Error" });
    } else {
      const Inforu = JSON.parse(body)
      if(Inforu.status != 'ok'){
        res.render('user', {Inforu: null, error :"Error" });
      } else {
        console.log(userId);
        console.log(url);
        res.render('user', {Infor: Inforu, error :"Error" });
      }
    }
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})