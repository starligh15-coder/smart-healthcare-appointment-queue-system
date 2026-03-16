import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (

    <div style={styles.container}>


      {/* HERO SECTION */}

      <div style={styles.hero}>

        <div style={styles.heroOverlay}>

          <h1 style={styles.title}>
            Smart Healthcare Queue System
          </h1>

          <p style={styles.subtitle}>
            Book appointments, track your queue in real-time and reduce hospital waiting time
          </p>

          <div style={styles.buttons}>

            <button
              style={styles.primaryBtn}
              onClick={() => navigate("/book")}
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



      {/* FEATURES */}

      <div style={styles.features}>

        <h2 style={styles.featuresTitle}>
          Platform Features
        </h2>

        <div style={styles.cardContainer}>


          {/* Appointment Booking */}

          <div
            style={styles.card}

            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e6f7fb"
              e.currentTarget.style.border = "2px solid #1da1b9"
              e.currentTarget.style.transform = "translateY(-6px)"
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white"
              e.currentTarget.style.border = "none"
              e.currentTarget.style.transform = "translateY(0)"
            }}

            onClick={() => navigate("/book")}
          >

            <h3>Appointment Booking</h3>

            <p>
              Book doctor appointments from anywhere.
            </p>

          </div>



          {/* Queue Tracking */}

          <div
            style={styles.card}

            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e6f7fb"
              e.currentTarget.style.border = "2px solid #1da1b9"
              e.currentTarget.style.transform = "translateY(-6px)"
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white"
              e.currentTarget.style.border = "none"
              e.currentTarget.style.transform = "translateY(0)"
            }}

            onClick={() => navigate("/dashboard")}
          >

            <h3>Queue Tracking</h3>

            <p>
              Check real-time queue status instantly.
            </p>

          </div>



          {/* Emergency */}

          <div
            style={styles.card}

            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e6f7fb"
              e.currentTarget.style.border = "2px solid #1da1b9"
              e.currentTarget.style.transform = "translateY(-6px)"
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white"
              e.currentTarget.style.border = "none"
              e.currentTarget.style.transform = "translateY(0)"
            }}

          >

            <h3>Emergency Check</h3>

            <p>
              Reduce waiting time and improve service.
            </p>

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
    height: "520px",
    backgroundImage: "url('/healthcare.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  heroOverlay: {
    background: "rgba(0,0,0,0.45)",
    padding: "60px",
    borderRadius: "15px",
    textAlign: "center",
    color: "white",
    animation: "fadeSlide 1.2s ease"
  },

  title: {
    fontSize: "48px",
    fontWeight: "700",
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
    padding: "14px 34px",
    background: "#1da1b9",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
  },

  secondaryBtn: {
    padding: "12px 28px",
    background: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  },

  features: {
    padding: "80px 40px",
    background: "#f5f8fa",
    textAlign: "center"
  },

  featuresTitle: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "50px"
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px"
  },

  card: {
    width: "260px",
    padding: "30px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    animation: "popUp 0.8s ease"
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#1da1b9",
    color: "white",
    marginTop: "50px"
  }

};

export default LandingPage;