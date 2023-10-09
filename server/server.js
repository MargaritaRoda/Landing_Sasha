const express = require('express');
const { cardInfo, aboutInfo, skills } = require('./info.js');
const cors = require('cors');

const app = express();
app.use(cors());

// const productRouter = express.Router;

app.get('/', function (req, res) {
  res.send(cardInfo);
});

app.get('/about', function (req, res) {
  res.send(aboutInfo);
});
app.get('/skills', function (req, res) {
  res.send(skills);
});

// productRouter.use('/About-me', function (req, res) {
//     res.send('About me');
// });
// productRouter.use('/Methods', function (req, res) {
//     res.send('Methods');
// });
//
// app.use('/', productRouter);
// app.get('/', function (req, res) {
//     return res.send();
// })

app.listen(3000, function () {
  console.log('api app started');
});
