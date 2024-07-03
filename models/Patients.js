const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  patientId: String,
  name: String,
  age: Number,
  gender: String,
  address: String,
  phone: String,
  email: String,
  medicalHistory: String,
}, { collection: 'Patients'
});

module.exports = mongoose.model('Patients', PatientSchema);
