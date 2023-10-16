const express = require('express');
const {
  cardInfo,
  aboutInfo,
  aboutInfoEn,
  skills,
  skillsEn,
} = require('./info.js');
const cors = require('cors');
const { cardInfoEn } = require('./info');

const app = express();
app.use(cors());

app.get('/:lang', function (req, res) {
  if (req.query.lang === 'ru' || req.query.lang !== 'en') {
    res.send(cardInfo);
  } else {
    res.send(cardInfoEn);
  }
});

app.get('/about/:lang', (req, res) => {
  if (req.query.lang === 'ru' || req.query.lang !== 'en') {
    res.send(aboutInfo);
  } else {
    res.send(aboutInfoEn);
  }
});

app.get('/skills/:lang', function (req, res) {
  if (req.query.lang === 'ru' || req.query.lang !== 'en') {
    res.send(skills);
  } else {
    res.send(skillsEn);
  }
});

app.listen(3000, function () {
  console.log('api app started');
});
