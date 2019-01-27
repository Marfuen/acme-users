const express = require('express');
const app = express();
const homePage = require('./homePage');
const usersPage = require('./usersPage');
const userDetailsPage = require('./userDetailsPage');
const usersData = require('./usersData');

const user = usersData.list();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(homePage);
});

app.get('/users', (req, res) => {
  res.send(usersPage(user));
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const myUser = usersData.find(id);
  res.send(userDetailsPage(myUser));
});









const PORT = 3000;
app.listen(PORT, 'localhost');
console.log('App listening on port: ', PORT);
