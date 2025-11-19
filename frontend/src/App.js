import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    contact: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/patients")
      .then((res) => setPatients(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/patients", form).then(() => {
      alert("Patient Added!");
      window.location.reload();
    });
  };

  // Doctors Section (add below patients section in App.js)

const [doctors, setDoctors] = useState([]);
const [docForm, setDocForm] = useState({
  name: "",
  specialty: "",
  contact: "",
  email: "",
});

// Fetch doctors
useEffect(() => {
  axios.get("http://localhost:3001/doctors")
    .then((res) => setDoctors(res.data));
}, []);

// Add doctor form change handler
const handleDocChange = (e) => {
  setDocForm({ ...docForm, [e.target.name]: e.target.value });
};

// Add doctor submit handler
const handleDocSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3001/doctors", docForm).then(() => {
    alert("Doctor Added!");
    window.location.reload();
  });
};
// State
const [appointments, setAppointments] = useState([]);
const [apptForm, setApptForm] = useState({
  patient_id: "",
  doctor_id: "",
  date: "",
  time: "",
  reason: ""
});

// Fetch appointments
useEffect(() => {
  axios.get("http://localhost:3001/appointments")
    .then((res) => setAppointments(res.data));
}, []);

// Handle form input changes
const handleApptChange = (e) => {
  setApptForm({ ...apptForm, [e.target.name]: e.target.value });
};

// Handle appointment form submit
const handleApptSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3001/appointments", apptForm).then(() => {
    alert("Appointment Booked!");
    window.location.reload();
  });
};

const [records, setRecords] = useState([]);
const [recForm, setRecForm] = useState({
  patient_id: "",
  diagnosis: "",
  details: "",
  date: ""
});

// Fetch medical records
useEffect(() => {
  axios.get("http://localhost:3001/medical_records")
    .then((res) => setRecords(res.data));
}, []);

// Change & submit
const handleRecChange = (e) => {
  setRecForm({ ...recForm, [e.target.name]: e.target.value });
};
const handleRecSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3001/medical_records", recForm).then(() => {
    alert("Medical Record Added!");
    window.location.reload();
  });
};


const [medications, setMedications] = useState([]);
const [medForm, setMedForm] = useState({
  patient_id: "",
  doctor_id: "",
  name: "",
  dosage: "",
  start_date: "",
  end_date: ""
});

// Fetch medications
useEffect(() => {
  axios.get("http://localhost:3001/medications")
    .then((res) => setMedications(res.data));
}, []);

// Change & submit
const handleMedChange = (e) => {
  setMedForm({ ...medForm, [e.target.name]: e.target.value });
};
const handleMedSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3001/medications", medForm).then(() => {
    alert("Medication Added!");
    window.location.reload();
  });
};



  return (
    <div style={{ padding: 20 }}>
      <h2>Patients</h2>
      <ul>
        {patients.map((p) => (
          <li key={p.patient_id}>
            {p.name} | {p.gender} | {p.dob.slice(0, 10)}
          </li>
        ))}
      </ul>
      <h3>Add Patient</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          required
        />
        <input
          name="gender"
          placeholder="Gender"
          value={form.gender}
          onChange={handleChange}
          required
        />
        <input
          name="contact"
          placeholder="Contact"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Patient</button>
        <h2>Doctors</h2>
<ul>
  {doctors.map((d) => (
    <li key={d.doctor_id}>
      {d.name} | {d.specialty} | {d.contact}
    </li>
  ))}
</ul>
<h3>Add Doctor</h3>
<form onSubmit={handleDocSubmit}>
  <input
    name="name"
    placeholder="Name"
    value={docForm.name}
    onChange={handleDocChange}
    required
  />
  <input
    name="specialty"
    placeholder="Specialty"
    value={docForm.specialty}
    onChange={handleDocChange}
    required
  />
  <input
    name="contact"
    placeholder="Contact"
    value={docForm.contact}
    onChange={handleDocChange}
    required
  />
  <input
    name="email"
    placeholder="Email"
    value={docForm.email}
    onChange={handleDocChange}
    required
  />
  <button type="submit">Add Doctor</button>
</form>

      </form>
      <h2>Appointments</h2>
<ul>
  {appointments.map((a) => (
    <li key={a.appointment_id}>
      {a.date} {a.time} | {a.patient} with {a.doctor} ({a.reason})
    </li>
  ))}
</ul>
<h3>Book Appointment</h3>
<form onSubmit={handleApptSubmit}>
  <select
    name="patient_id"
    value={apptForm.patient_id}
    onChange={handleApptChange}
    required
  >
    <option value="">Select Patient</option>
    {patients.map((p) => (
      <option key={p.patient_id} value={p.patient_id}>
        {p.name}
      </option>
    ))}
  </select>
  <select
    name="doctor_id"
    value={apptForm.doctor_id}
    onChange={handleApptChange}
    required
  >
    <option value="">Select Doctor</option>
    {doctors.map((d) => (
      <option key={d.doctor_id} value={d.doctor_id}>
        {d.name}
      </option>
    ))}
  </select>
  <input
    name="date"
    type="date"
    value={apptForm.date}
    onChange={handleApptChange}
    required
  />
  <input
    name="time"
    type="time"
    value={apptForm.time}
    onChange={handleApptChange}
    required
  />
  <input
    name="reason"
    placeholder="Reason"
    value={apptForm.reason}
    onChange={handleApptChange}
    required
  />
  <button type="submit">Book Appointment</button>
</form>
<h2>Medical Records</h2>
<ul>
  {records.map((r) => (
    <li key={r.record_id}>
      {r.date} | {r.patient}: {r.diagnosis} - {r.details}
    </li>
  ))}
</ul>
<h3>Add Medical Record</h3>
<form onSubmit={handleRecSubmit}>
  <select
    name="patient_id"
    value={recForm.patient_id}
    onChange={handleRecChange}
    required
  >
    <option value="">Select Patient</option>
    {patients.map((p) => (
      <option key={p.patient_id} value={p.patient_id}>
        {p.name}
      </option>
    ))}
  </select>
  <input
    name="diagnosis"
    placeholder="Diagnosis"
    value={recForm.diagnosis}
    onChange={handleRecChange}
    required
  />
  <input
    name="details"
    placeholder="Details"
    value={recForm.details}
    onChange={handleRecChange}
    required
  />
  <input
    name="date"
    type="date"
    value={recForm.date}
    onChange={handleRecChange}
    required
  />
  <button type="submit">Add Record</button>
</form>
<h2>Medications</h2>
<ul>
  {medications.map((m) => (
    <li key={m.medication_id}>
      {m.patient} ({m.doctor}): {m.name} {m.dosage} [{m.start_date} - {m.end_date}]
    </li>
  ))}
</ul>
<h3>Add Medication</h3>
<form onSubmit={handleMedSubmit}>
  <select
    name="patient_id"
    value={medForm.patient_id}
    onChange={handleMedChange}
    required
  >
    <option value="">Select Patient</option>
    {patients.map((p) => (
      <option key={p.patient_id} value={p.patient_id}>
        {p.name}
      </option>
    ))}
  </select>
  <select
    name="doctor_id"
    value={medForm.doctor_id}
    onChange={handleMedChange}
    required
  >
    <option value="">Select Doctor</option>
    {doctors.map((d) => (
      <option key={d.doctor_id} value={d.doctor_id}>
        {d.name}
      </option>
    ))}
  </select>
  <input
    name="name"
    placeholder="Medicine"
    value={medForm.name}
    onChange={handleMedChange}
    required
  />
  <input
    name="dosage"
    placeholder="Dosage"
    value={medForm.dosage}
    onChange={handleMedChange}
    required
  />
  <input
    name="start_date"
    type="date"
    value={medForm.start_date}
    onChange={handleMedChange}
    required
  />
  <input
    name="end_date"
    type="date"
    value={medForm.end_date}
    onChange={handleMedChange}
    required
  />
  <button type="submit">Add Medication</button>
</form>



    </div>
  );
}

export default App;
