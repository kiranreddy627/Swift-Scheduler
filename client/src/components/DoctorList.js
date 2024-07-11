import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div
        style={{
          cursor: "pointer",
          border: "none",
          width: "300px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
        }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            fontSize: "18px",
            textAlign: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div style={{ padding: "15px", fontSize: "16px", lineHeight: "1.6" }}>
          <p>
            <b style={{ color: "#007bff" }}>Specialization:</b> {doctor.specialization}
          </p>
          <p>
            <b style={{ color: "#007bff" }}>Experience:</b> {doctor.experience} years
          </p>
          <p>
            <b style={{ color: "#007bff" }}>Fees Per Consultation:</b> RS:{doctor.feesPerCunsaltation}
          </p>
          <p>
            <b style={{ color: "#007bff" }}>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
