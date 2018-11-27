const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var test =
  'mongodb://frank:password@localhost:27017/admin?authSource=admin';
var mongoDB =
  'mongodb://frank:password@therastation.org/admin?authSource=admin';
mongoose.connect(test);  // CHANGE THIS BACK TO mongoDB FOR THE PRODUCTION ENVIRONMENT
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
  models.Users.findOne({ email: req.body.email }, function (err, user) {
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
      newAccount.save(function (err) {
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
  //req.body.validate
  //Make sure every character in the data is what you expect it to be.
  //Email cant have
  models.Users.findOne({ email: req.body.email }, function (err, user) {
    if (err) throw err;
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
  console.log(req.body.user.firstName);
  models.Users.findOneAndUpdate(
    { email: req.body.originalEmail },
    {
      $set: {
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        address: req.body.user.address,
        email: req.body.user.email,
        password: req.body.user.password,
        type: req.body.user.type,
        bio: req.body.user.bio
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (user) {
        console.log(user);
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

router.get('/allProfessionals', (req, res) => {
  models.Users.find({ type: { $ne: 'Patient' } }, function (err, users) {
    res.send(users);
  });
  console.log('/allProfessionals');
});

router.get('/allPatients', (req, res) => {
  models.Users.find({ type: 'Patient' }, function (err, users) {
    res.send(users);
  });
  console.log('/allPatients');
});

router.post('/requestAppointment', (req, res) => {
  models.Users.findByIdAndUpdate(
    req.body.patient,
    {
      $push: {
        requestedAppointments: {
          dateTime: req.body.appointment,
          id: req.body.professional
        }
      }
    },
    { upsert: true, new: true },
    function (err, user) {
      if (err) throw err;
      res.json(user);
    }
  );
  models.Users.findByIdAndUpdate(
    req.body.professional,
    {
      $push: {
        requestedAppointments: {
          dateTime: req.body.appointment,
          id: req.body.patient
        }
      }
    },
    { upsert: true },
    function (err, user) {
      if (err) throw err;
    }
  );
  res.statusCode = 200;
  console.log('/requestAppointment');
});

router.post('/cancelRequestedAppointment', (req, res) => {
  models.Users.findByIdAndUpdate(
    req.body.patient,
    {
      $pull: {
        requestedAppointments: {
          dateTime: req.body.date,
          id: req.body.professional 
        }
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (req.body.accountType.includes('Patient')) {
        res.json(user);
      }
    }
  );
  models.Users.findByIdAndUpdate(
    req.body.professional,
    {
      $pull: {
        requestedAppointments: {
          dateTime: req.body.date,
          id: req.body.patient
        }
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (!req.body.accountType.includes('Patient')) {
        res.json(user);
      }
    }
  );
  res.statusCode = 200;
  console.log('/cancelRequestedAppointment');
});

router.post('/cancelApprovedAppointment', (req, res) => {
  models.Users.findByIdAndUpdate(
    req.body.patient,
    {
      $pull: {
        approvedAppointments: {
          dateTime: req.body.date,
          id: req.body.professional
        }
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (req.body.accountType.includes('Patient')) {
        res.json(user);
      }
    }
  );
  models.Users.findByIdAndUpdate(
    req.body.professional,
    {
      $pull: {
        approvedAppointments: {
          dateTime: req.body.date,
          id: req.body.patient
        }
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (!req.body.accountType.includes('Patient')) {
        res.json(user);
      }
    }
  );
  res.statusCode = 200;
  console.log('/cancelApprovedAppointment');
});

router.post('/approveAppointment', (req, res) => {
  models.Users.findByIdAndUpdate(
    req.body.patient,
    {
      $pull: {
        requestedAppointments: {
          dateTime: req.body.date,
          id: req.body.professional
        }
      },
      $push: {
        approvedAppointments: {
          dateTime: req.body.date,
          id: req.body.professional
        }
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (req.body.accountType.includes('Patient')) {
        res.json(user);
      }
    }
  );
  models.Users.findByIdAndUpdate(
    req.body.professional,
    {
      $pull: {
        requestedAppointments: {
          dateTime: req.body.date,
          id: req.body.patient
        }
      },
      $push: {
        approvedAppointments: {
          dateTime: req.body.date,
          id: req.body.patient
        }
      }
    },
    { new: true },
    function (err, user) {
      if (err) throw err;
      if (!req.body.accountType.includes('Patient')) {
        res.json(user);
      }
    }
  );
  res.statusCode = 200;
  console.log('/approveAppointment');
});

router.put('/sendMessage', (req, res) => {
  models.Users.findByIdAndUpdate(
    req.body.from,
    {
      $push: {
        messages: {
          dateTime: req.body.dateTime,
          text: req.body.text,
          from: req.body.from,
          to: req.body.to,
          read: req.body.read
        }
      }
    },
    function(err, user) {
      if(err) throw err;
      else{
        console.log(user.messages);
      }
    }
  );
  models.Users.findByIdAndUpdate(
    req.body.to,
    {
      $push: {
        messages: {
          dateTime: req.body.dateTime,
          text: req.body.text,
          from: req.body.from,
          to: req.body.to,
          read: req.body.read
        }
      }
    },
    function(err, user) {
      if(err) throw err;
      else{
        console.log(user.messages);
      }
    }
  );
  res.statusCode = 200;
  console.log('/sendMessage');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
