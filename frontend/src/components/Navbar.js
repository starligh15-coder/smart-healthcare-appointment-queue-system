import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>

      <h2 style={styles.logo}>HealthQueue</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      </div>

    </nav>
  );
}

const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#0d6efd",
    color: "white"
  },

  logo: {
    margin: 0
  },

  link: {
    margin: "0 15px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }

}

export default Navbar;