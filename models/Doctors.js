const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  doctorId: String,
  name: String,
  specialization: String,
  phone: String,
  email: String,
  consultationHours: String,
  departmentId: String,
}, { collection: 'Doctors' 
});

module.exports = mongoose.model('Doctors', DoctorSchema);

