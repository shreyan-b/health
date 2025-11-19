-- Patients
INSERT INTO Patients (name, dob, gender, contact, address)
VALUES 
('Amit Sharma', '1990-01-15', 'Male', '9876543210', 'Bengaluru'),
('Priya Rao', '1985-05-22', 'Female', '9123456780', 'Bengaluru'),
('Rahul Kumar', '2000-09-07', 'Male', '9988776655', 'Bengaluru');

-- Doctors
INSERT INTO Doctors (name, specialty, contact, email)
VALUES
('Dr. Meena Gupta', 'Cardiology', '9001122334', 'meena.gupta@example.com'),
('Dr. Rakesh Singh', 'General Physician', '9344556677', 'rakesh.singh@example.com');

-- Appointments
INSERT INTO Appointments (patient_id, doctor_id, date, time, reason)
VALUES
(1, 1, '2023-11-10', '10:00', 'Heart checkup'),
(2, 2, '2023-11-12', '11:30', 'Fever consultation');

-- Medical Records
INSERT INTO Medical_Records (patient_id, diagnosis, details, date)
VALUES
(1, 'Hypertension', 'Blood Pressure 150/90. Medication prescribed.', '2023-11-10'),
(2, 'Flu', 'Symptoms: fever, cough. Prescribed rest and medication.', '2023-11-12');

-- Medications
INSERT INTO Medications (patient_id, doctor_id, name, dosage, start_date, end_date)
VALUES
(1, 1, 'Atenolol', '50mg once daily', '2023-11-10', '2023-12-10'),
(2, 2, 'Paracetamol', '500mg twice daily', '2023-11-12', '2023-11-16');
