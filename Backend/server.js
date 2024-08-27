require("dotenv").config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const admin = require('./models/admin');
const Feedback = require('./models/feedback');
const URI=process.env.MONGO_URI;
mongoose.connect(URI);

const Appointment = require("./models/appointment-model");

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

app.post('/addAppointment', async (req, res) => {
  try {
    const { pname, gender, pmname, pfname, age, mobile, date, location, time, problem } = req.body;

    if (!pname || !gender || !pmname || !pfname || !age || !mobile || !date || !location || !time || !problem) {
      return res.status(400).json({ Required: true });
    }

    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).send({ error: error.message });
  }
});

app.post('/adminlogin', async (req, res) => {
  if (req.body.username && req.body.password) {
      let data = await admin.find(req.body);
      if (data.length > 0) {
          res.send(data);
      } else {
          res.send({ Status: "Username password not matched" });
      }

  }
  else {
      res.send({ Status: "invailid syntax" });
  }
});


app.get('/getappointment', async (req, res) => {
  let data = await Appointment.find();
  res.send(data);
})

app.get('/details/:id', async (req, res) => {
  let data = await Appointment.findOne({ _id: req.params.id });
  res.send(data);
})

app.get('/searchappointment/:key', async (req, res) => {
  let result = await Appointment.find(
      {
          "$or": [
              { pname: { $regex: req.params.key, $options: 'i' } },
              { date: { $regex: req.params.key, $options: 'i' } },
              { time: { $regex: req.params.key, $options: 'i' } }
          ]
      }
  );
  res.send(result);
});


app.post('/sendfeed', async (req, res) => {
  const { feedback } = req.body;

  if (!feedback) {
      return res.status(400).json({ message: 'Feedback is required' });
  }

  try {
      const newFeedback = new Feedback({ feedback });
      await newFeedback.save();
      res.status(201).json({ message: 'Feedback received successfully' });
  } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


app.get('/allfeedbacks', async (req, res) => {
  let data = await Feedback.find();
  res.send(data);
})

app.delete('/deletedata/:id', async (req, res) => {
  let data = await Feedback.deleteOne({ _id: req.params.id });
  res.send(data);
})
// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
