import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <div style={styles.navbar}>

      <div style={styles.left}>

        <div style={styles.link} onClick={() => navigate("/")}>
          🏠 Home
        </div>

        <div style={styles.link}>
          📅 Book Appointment
        </div>

        <div style={styles.link}>
          ⚠ Emergency Check
        </div>

        <div style={styles.link}>
          🏥 Hospitals
        </div>

      </div>


      <div style={styles.right}>

        <button
          style={styles.login}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          style={styles.dashboard}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

      </div>

    </div>

  );
}


const styles = {

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#f8fbfc",
    borderBottom: "1px solid #e0e0e0",
    fontFamily: "Segoe UI"
  },

  left: {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  },

  link: {
    cursor: "pointer",
    color: "#2b6f82",
    fontWeight: "500"
  },

  right: {
    display: "flex",
    gap: "15px"
  },

  login: {
    padding: "8px 18px",
    border: "1px solid #ccc",
    background: "white",
    borderRadius: "10px",
    cursor: "pointer"
  },

  dashboard: {
    padding: "9px 20px",
    background: "#1da1b9",
    border: "none",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer"
  }

};

export default Navbar;