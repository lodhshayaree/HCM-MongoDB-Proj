const mongoose = require('mongoose');

const TreatmentSchema = new mongoose.Schema({
  treatmentId: String,
  patientId: String,
  doctorId: String,
  treatmentDate: Date,
  diagnosis: String,
  treatment: String,
  }, { collection: 'Treatments'
});

module.exports = mongoose.model('Treatments', TreatmentSchema);

