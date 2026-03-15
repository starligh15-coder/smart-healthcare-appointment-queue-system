import { useState } from "react";

function DashboardPage() {

  const [token, setToken] = useState(null);
  const [lastToken, setLastToken] = useState(24);
  const [currentServing] = useState(21);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM"
  ];

  const generateToken = () => {

    if (!selectedSlot) {
      alert("Please select a time slot first");
      return;
    }

    const newToken = lastToken + 1;
    setToken(newToken);
    setLastToken(newToken);

    alert(`Appointment booked with ${selectedDoctor} at ${selectedSlot}`);

    setSelectedDoctor(null);
    setSelectedSlot(null);
  };

  const waitPatients = token ? token - currentServing : 0;
  const waitTime = waitPatients * 2;

  return (

    <div style={styles.container}>

      <h1 style={styles.title}>Patient Dashboard</h1>

      {/* QUEUE CARDS */}

      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>Your Queue Token</h3>
          <p style={styles.big}>{token ? token : "-"}</p>
        </div>

        <div style={styles.card}>
          <h3>Currently Serving</h3>
          <p style={styles.big}>{currentServing}</p>
        </div>

        <div style={styles.card}>
          <h3>Estimated Wait Time</h3>
          <p style={styles.big}>
            {token ? waitTime + " mins" : "-"}
          </p>
        </div>

      </div>


      {/* DOCTOR LIST */}

      <h2 style={styles.sectionTitle}>Available Doctors</h2>

      <div style={styles.doctorGrid}>

        <div style={styles.doctorCard}>
          <h3>Dr. Sharma</h3>
          <p>Cardiologist</p>

          <button
            style={styles.bookBtn}
            onClick={() => setSelectedDoctor("Dr. Sharma")}
          >
            Book Appointment
          </button>

        </div>

        <div style={styles.doctorCard}>
          <h3>Dr. Mehta</h3>
          <p>Dermatologist</p>

          <button
            style={styles.bookBtn}
            onClick={() => setSelectedDoctor("Dr. Mehta")}
          >
            Book Appointment
          </button>

        </div>

        <div style={styles.doctorCard}>
          <h3>Dr. Kapoor</h3>
          <p>Neurologist</p>

          <button
            style={styles.bookBtn}
            onClick={() => setSelectedDoctor("Dr. Kapoor")}
          >
            Book Appointment
          </button>

        </div>

      </div>


      {/* TIME SLOT SELECTOR */}

      {selectedDoctor && (

        <div style={styles.slotSection}>

          <h3>Select Time Slot for {selectedDoctor}</h3>

          <div style={styles.slotGrid}>

            {timeSlots.map((slot) => (

              <button
                key={slot}
                style={{
                  ...styles.slotBtn,
                  background:
                    selectedSlot === slot ? "#0d6efd" : "#eee",
                  color:
                    selectedSlot === slot ? "white" : "black"
                }}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>

            ))}

          </div>

          <button
            style={styles.confirmBtn}
            onClick={generateToken}
          >
            Confirm Appointment
          </button>

        </div>

      )}

    </div>

  );
}


const styles = {

  container: {
    padding: "40px",
    fontFamily: "Arial"
  },

  title: {
    marginBottom: "30px"
  },

  grid: {
    display: "flex",
    gap: "20px",
    marginBottom: "40px"
  },

  card: {
    background: "#f5f9ff",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center"
  },

  big: {
    fontSize: "28px",
    fontWeight: "bold"
  },

  sectionTitle: {
    marginBottom: "20px"
  },

  doctorGrid: {
    display: "flex",
    gap: "30px",
    marginBottom: "30px"
  },

  doctorCard: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    width: "200px"
  },

  bookBtn: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  slotSection: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "500px"
  },

  slotGrid: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px"
  },

  slotBtn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  confirmBtn: {
    marginTop: "15px",
    padding: "10px 15px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }

};

export default DashboardPage;