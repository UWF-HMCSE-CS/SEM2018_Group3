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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.put('/newAccount', (req, res) => {
  var user = models.Users;
  user.findOne({ email: req.body.email }, function(err, user) {
    if (user) {
      res.statusCode = 200;
      res.json(user);
    } else if (user == null) {
      var newAccount = new models.Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
      });
      newAccount.save(function(err) {
        if (err) throw err;
        else {
          res.statusCode = 200;
          res.json(newAccount);
        }
      });
    }
  });
  console.log('/newAccount');
});

router.post('/login', (req, res) => {
  var user = models.Users;
  user.findOne({ email: req.body.email }, function(err, user) {
    if (user != null) {
      if (user.password == req.body.password) {
        res.statusCode = 200;
        res.json(user);
      } else {
        res.statusCode = 200;
        res.json(null);
      }
    }
    if (user == null) {
      res.statusCode = 200;
      res.json(user);
    }
  });
  console.log('/login');
});

router.put('/updateUser', (req, res) => {
  models.Users.user.findOneAndUpdate(
    { email: req.body.originalEmail },
    {
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      address: req.body.user.address,
      email: req.body.user.email,
      password: req.body.user.password,
      type: req.body.user.type,
      bio: req.body.user.bio
    },
    { new: true },
    function(err, user) {
      if (user) {
        res.statusCode = 200;
        res.json(user);
      } else {
        res.statusCode = 200;
        res.json(null);
      }
    }
  );
  console.log('/updateUser');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
