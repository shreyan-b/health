

-- Create a simple log table to track changes
CREATE TABLE Audit_Log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    record_id INT,
    change_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger to log insertions into Appointments table
DELIMITER //
CREATE TRIGGER LogAppointmentInsert
AFTER INSERT ON Appointments
FOR EACH ROW
BEGIN
    INSERT INTO Audit_Log (record_id)
    VALUES (NEW.appointment_id);
END;
//
DELIMITER ;