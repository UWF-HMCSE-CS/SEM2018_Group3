var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var User = Schema({
  id: ObjectId,

  // Profile information
  firstName: {
    type: String,
    required: true 
  },
  lastName: {
    type: String,
    required: true 
  },
  address: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    min: [8, 'Not enough characters in passwords']
  },

  // Patient bio: Description of issues, Professional bio: list of credentials or professional history
  bio: String,

  // The type of account (ex. patient, type of professional) from AccountType list below
  type: {
    type: String,
    required: true 
  },

  // Appointments
  requestedAppointments: [{ dateTime: Date, id: String }],
  approvedAppointments: [{ dateTime: Date, id: String }],

  // Messages between patient and professional
  messages: [{ dateTime: Date, text: String, id: String }],

  // Patient feedback: review on professionals, Professional feedback: personal note about patient
  feedback: [{ comment: String, rating: Number, id: String }]
});

var Users = mongoose.model('Users', User);

var mongoDB =
  'mongodb://frank:password@therastation.org/admin?authSource=admin';
mongoose.connect(mongoDB);

exports.Users = Users;
