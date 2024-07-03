const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  departmentId: String,
  name: String,
  head: String,
  }, { collection: 'Departments'
});

module.exports = mongoose.model('Departments', DepartmentSchema);

