const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  appointmentId: String,
  patientId: String,
  doctorId: String,
  appointmentDate: Date,
  reason: String,
}, { collection: 'Appointments' 
});

module.exports = mongoose.model('Appointments', AppointmentSchema);

