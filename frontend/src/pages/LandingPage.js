import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        <div style={styles.left}>

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

        <div style={styles.right}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966484.png"
            alt="doctor"
            style={styles.image}
          />
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
    padding: "60px",
    fontFamily: "Arial"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "80px"
  },

  left: {
    width: "50%"
  },

  right: {
    width: "40%"
  },

  title: {
    fontSize: "42px",
    marginBottom: "20px"
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px"
  },

  buttons: {
    display: "flex",
    gap: "20px"
  },

  primaryBtn: {
    padding: "12px 25px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  secondaryBtn: {
    padding: "12px 25px",
    background: "white",
    border: "2px solid #0d6efd",
    borderRadius: "6px",
    cursor: "pointer"
  },

  image: {
    width: "100%"
  },

  features: {
    textAlign: "center",
    marginBottom: "80px"
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px"
  },

  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#0d6efd",
    color: "white"
  }

};

export default LandingPage;