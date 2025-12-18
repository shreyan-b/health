

-- View to see patient appointments with doctor details
CREATE VIEW PatientAppointments AS
SELECT 
    p.patient_id,
    p.name AS patient_name,
    p.dob,
    p.gender,
    a.appointment_id,
    a.date,
    a.time,
    a.reason,
    d.name AS doctor_name,
    d.specialty
FROM Patients p
JOIN Appointments a ON p.patient_id = a.patient_id
JOIN Doctors d ON a.doctor_id = d.doctor_id;