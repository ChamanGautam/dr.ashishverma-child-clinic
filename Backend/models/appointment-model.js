const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    pname: String,
    gender: String,
    pmname: String,
    pfname: String,
    age: String,
    mobile: String,
    date: String,
    location: String,
    time: String,
    problem: String,
    currentTime: String
  });
  
  const Appointment = mongoose.model('Appointment', appointmentSchema);

  module.exports = Appointment;