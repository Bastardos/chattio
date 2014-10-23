var express = require('express');
var app = module.exports = express();

var router = express.Router();

router.get('/', function (req, res) {
  res.status(200).send('howdy');
});

app.use(router);

