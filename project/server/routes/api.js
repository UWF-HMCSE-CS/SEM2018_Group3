const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var mongoDB =
  'mongodb://frank:password@therastation.org/admin?authSource=admin';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var models = require('../models/models.js');

// This bit is required for Angular to recognize that the response was OK (200)
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.put('/newAccount', (req, res) => {
  var newAccount = new models.Users();
  newAccount.firstName = req.body.firstName;
  newAccount.lastName = req.body.lastName;
  newAccount.address = req.body.address;
  newAccount.email = req.body.email;
  newAccount.password = req.body.password;
  newAccount.save();
  res.statusCode = 200;
  res.json({ message: 'New account created!' });
  console.log('/newAccount');
});

router.get('/login', (req, res) => {
  var user = new models.Users();
  user.findByEmail(req.body.email, function(err, user) {
    if (err) throw err;
    console.log(user);
    if (user) {
      res.statusCode = 200;
      res.json(user);
    }
  });
  console.log('/login');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
