var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Appointment = new Schema({
  dateTime: Date,
  id: String // who the appointment is with
});

var Appointments = mongoose.model('Appointments', Appointment);

var Message = new Schema({
  dateTime: Date,
  text: String,
  id: String // who the message is to
});

var Messages = mongoose.model('Messages', Message);

var Feedback = new Schema({
  comment: String,
  // Patient rating: 1-5 rating for professional;
  // Professional rating: (possibly) 1-5 priority of patient severity
  rating: Number,
  id: String // who the feedback is about
});

var Feedbacks = mongoose.model('Feedbacks', Feedback);

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
  requestedAppointments: [Appointments],
  approvedAppointments: [Appointments],
  availableAppointments: [Date],

  // Messages between patient and professional
  messages: [Messages],

  // Patient feedback: review on professionals, Professional feedback: personal note about patient
  feedback: [Feedbacks]
});

var Users = mongoose.model('Users', User);

var mongoDB =
  'mongodb://frank:password@therastation.org/admin?authSource=admin';
mongoose.connect(mongoDB);

exports.Users = Users;
exports.Appointments = Appointments;
exports.Messages = Messages;
exports.Feedbacks = Feedbacks;
