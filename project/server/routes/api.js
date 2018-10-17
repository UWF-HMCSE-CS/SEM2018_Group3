const express = require('express');
const router = express.Router();

const newAccountSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a first name'
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: Number
  }
});

router.put('/newAccount', (req, res) => {
  res.send('new account works');
  console.log(req);
  console.log(res);
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
