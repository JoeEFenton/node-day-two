const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./public/data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/users', function (req, res) {
  res.render('users', {users: data.users})
})


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
