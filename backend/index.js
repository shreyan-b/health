const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection (fill in your own password if needed)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shreyan88', // <-- Add your MySQL root password
  database: 'healthcare'
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('Failed to connect:', err);
    return;
  }
  console.log('MySQL Connected!');
});

// GET all Patients
app.get('/patients', (req, res) => {
  db.query('SELECT * FROM Patients', (err, results) => {
    if (err) return res.status(500).send({ error: err });
    res.json(results);
  });
});

// POST a new Patient
app.post('/patients', (req, res) => {
  const { name, dob, gender, contact, address } = req.body;
  db.query(
    'INSERT INTO Patients (name, dob, gender, contact, address) VALUES (?, ?, ?, ?, ?)',
    [name, dob, gender, contact, address],
    (err, result) => {
      if (err) return res.status(500).send({ error: err });
      res.json({ message: 'Patient added!', id: result.insertId });
    }
  );
});

// GET all Doctors
app.get('/doctors', (req, res) => {
  db.query('SELECT * FROM Doctors', (err, results) => {
    if (err) return res.status(500).send({ error: err });
    res.json(results);
  });
});

// POST a new Doctor
app.post('/doctors', (req, res) => {
  const { name, specialty, contact, email } = req.body;
  db.query(
    'INSERT INTO Doctors (name, specialty, contact, email) VALUES (?, ?, ?, ?)',
    [name, specialty, contact, email],
    (err, result) => {
      if (err) return res.status(500).send({ error: err });
      res.json({ message: 'Doctor added!', id: result.insertId });
    }
  );
});

// GET all Doctors
app.get('/doctors', (req, res) => {
  db.query('SELECT * FROM Doctors', (err, results) => {
    if (err) return res.status(500).send({ error: err });
    res.json(results);
  });
});

// POST a new Doctor
app.post('/doctors', (req, res) => {
  const { name, specialty, contact, email } = req.body;
  db.query(
    'INSERT INTO Doctors (name, specialty, contact, email) VALUES (?, ?, ?, ?)',
    [name, specialty, contact, email],
    (err, result) => {
      if (err) return res.status(500).send({ error: err });
      res.json({ message: 'Doctor added!', id: result.insertId });
    }
  );
});

// GET all Appointments (with patient and doctor names)
app.get('/appointments', (req, res) => {
  db.query(
    `SELECT a.appointment_id, p.name AS patient, d.name AS doctor, a.date, a.time, a.reason
     FROM Appointments a
     JOIN Patients p ON a.patient_id = p.patient_id
     JOIN Doctors d ON a.doctor_id = d.doctor_id`,
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// POST (book) a new Appointment
app.post('/appointments', (req, res) => {
  const { patient_id, doctor_id, date, time, reason } = req.body;
  db.query(
    'INSERT INTO Appointments (patient_id, doctor_id, date, time, reason) VALUES (?, ?, ?, ?, ?)',
    [patient_id, doctor_id, date, time, reason],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Appointment booked!', id: result.insertId });
    }
  );
});

// GET all Medical Records (with patient name)
app.get('/medical_records', (req, res) => {
  db.query(
    `SELECT mr.record_id, p.name AS patient, mr.diagnosis, mr.details, mr.date
     FROM Medical_Records mr
     JOIN Patients p ON mr.patient_id = p.patient_id`,
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// POST new Medical Record
app.post('/medical_records', (req, res) => {
  const { patient_id, diagnosis, details, date } = req.body;
  db.query(
    'INSERT INTO Medical_Records (patient_id, diagnosis, details, date) VALUES (?, ?, ?, ?)',
    [patient_id, diagnosis, details, date],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Medical record added!', id: result.insertId });
    }
  );
});

// GET all Medications (with patient and doctor names)
app.get('/medications', (req, res) => {
  db.query(
    `SELECT m.medication_id, p.name AS patient, d.name AS doctor, m.name, m.dosage, m.start_date, m.end_date
     FROM Medications m
     JOIN Patients p ON m.patient_id = p.patient_id
     JOIN Doctors d ON m.doctor_id = d.doctor_id`,
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// POST new Medication
app.post('/medications', (req, res) => {
  const { patient_id, doctor_id, name, dosage, start_date, end_date } = req.body;
  db.query(
    'INSERT INTO Medications (patient_id, doctor_id, name, dosage, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)',
    [patient_id, doctor_id, name, dosage, start_date, end_date],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Medication added!', id: result.insertId });
    }
  );
});




app.listen(3001, () => {
  console.log('Server running on port 3001');
});
