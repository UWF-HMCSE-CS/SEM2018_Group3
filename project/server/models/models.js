var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = Schema({
  id: ObjectId,

  // Profile information
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  password: String,

  // Patient bio: Description of issues, Professional bio: list of credentials or professional history
  bio: String,

  // The type of account (ex. patient, type of professional) from AccountType list below
  type: String,

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
