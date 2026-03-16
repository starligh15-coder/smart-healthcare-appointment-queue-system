import { NavLink } from "react-router-dom";

function Navbar() {

  return (

    <div style={styles.navbar}>

      <div style={styles.left}>

        <div style={styles.logo}>
          HealthQueue
        </div>

        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/book"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.active } : styles.link
          }
        >
          Book Appointment
        </NavLink>

        <div style={styles.link}>
          Emergency Check
        </div>

        <div style={styles.link}>
          Hospitals
        </div>

      </div>


      <div style={styles.right}>

        <NavLink
          to="/login"
          style={styles.login}
        >
          Login
        </NavLink>

        <NavLink
          to="/dashboard"
          style={styles.dashboard}
        >
          Dashboard
        </NavLink>

      </div>

    </div>

  )

}


const styles = {

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 60px",
    background: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: "1000"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "25px"
  },

  logo: {
    fontWeight: "700",
    fontSize: "20px",
    color: "#1da1b9"
  },

  link: {
    textDecoration: "none",
    color: "#34495e",
    fontWeight: "500",
    padding: "8px 14px",
    borderRadius: "8px"
  },

  active: {
    background: "#e6f7fb",
    color: "#1da1b9"
  },

  right: {
    display: "flex",
    gap: "15px"
  },

  login: {
    textDecoration: "none",
    padding: "8px 18px",
    border: "1px solid #ccc",
    background: "white",
    borderRadius: "10px",
    color: "#333"
  },

  dashboard: {
    textDecoration: "none",
    padding: "9px 20px",
    background: "#1da1b9",
    border: "none",
    color: "white",
    borderRadius: "10px"
  }

}

export default Navbar;