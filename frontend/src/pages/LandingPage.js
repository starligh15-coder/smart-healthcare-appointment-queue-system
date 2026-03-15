import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        <div style={styles.overlay}>

          <h1 style={styles.title}>
            Smart Healthcare Queue System
          </h1>

          <p style={styles.subtitle}>
            Book appointments, track your queue in real-time,
            and reduce hospital waiting time.
          </p>

          <div style={styles.buttons}>
            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/dashboard")}
            >
              Get Started
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

        </div>

      </div>


      {/* FEATURES SECTION */}

      <div style={styles.features}>

        <h2>Platform Features</h2>

        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <h3>Online Appointment</h3>
            <p>Book doctor appointments from anywhere.</p>
          </div>

          <div style={styles.card}>
            <h3>Queue Tracking</h3>
            <p>Check real-time queue status instantly.</p>
          </div>

          <div style={styles.card}>
            <h3>Hospital Efficiency</h3>
            <p>Reduce waiting time and improve service.</p>
          </div>

        </div>

      </div>


      {/* FOOTER */}

      <div style={styles.footer}>
        © 2026 Smart Healthcare Queue System
      </div>

    </div>
  );
}

const styles = {

  container: {
    fontFamily: "Arial"
  },

  hero: {
    height: "85vh",
    backgroundImage: "url('/healthcare.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  overlay: {
    background: "rgba(0,0,0,0.6)",
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white"
  },

  title: {
    fontSize: "46px",
    marginBottom: "20px"
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "30px"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },

  primaryBtn: {
    padding: "12px 25px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  },

  secondaryBtn: {
    padding: "12px 25px",
    background: "white",
    border: "2px solid #0d6efd",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  },

  features: {
    textAlign: "center",
    padding: "70px"
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px"
  },

  card: {
    width: "250px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#0d6efd",
    color: "white"
  }

};

export default LandingPage;