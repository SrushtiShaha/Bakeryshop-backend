
// const customerSchema = new mongoose.Schema({
//   name: String, 
//   address: String,
//   contact: String,
// });

// module.exports = mongoose.model('Customer', customerSchema);

const mongoose = require('mongoose'); // ✅ Add this line at the top

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  }
});

module.exports = mongoose.model('Customer', customerSchema);
