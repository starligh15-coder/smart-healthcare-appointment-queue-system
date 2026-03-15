import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Patient");

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Account created successfully!");
      navigate("/login");
    }
    else {
      alert("Please fill all fields");
    }
  }

  return (

    <div style={styles.container}>

      {/* LEFT SIDE */}

      <div style={styles.left}>

        <img
          src="/doctorr.jpg"
          alt="doctor"
          style={styles.image}
        />

        <div style={styles.info}>
          <h2 style={styles.heading}>Join Our Healthcare Platform</h2>

          <div style={styles.feature}>✔ Book doctor appointments easily</div>
          <div style={styles.feature}>✔ Track real-time queue status</div>
          <div style={styles.feature}>✔ Smart AI healthcare assistance</div>
        </div>

      </div>


      {/* RIGHT SIDE */}

      <div style={styles.right}>

        <h1 style={styles.title}>Create Your Account</h1>
        <p style={styles.subtitle}>
          Register to start managing appointments
        </p>

        <form onSubmit={handleSignup} style={styles.form}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option>Patient</option>
            <option>Doctor</option>
          </select>

          <button style={styles.button}>
            Sign Up
          </button>

        </form>

        <p style={styles.loginLink}>
          Already have an account?
          <span onClick={() => navigate("/login")} style={styles.link}>
            Login
          </span>
        </p>

      </div>

    </div>

  )
}


const styles = {

  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Segoe UI",
    background: "#f3f7f9"
  },

  left: {
    width: "55%",
    padding: "40px",
    background: "#eaf4f6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "16px",
    margin: "40px"
  },

  image: {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "25px"
  },

  info: {
    fontSize: "16px",
    color: "#2c3e50"
  },

  heading: {
    marginBottom: "15px"
  },

  feature: {
    marginBottom: "10px"
  },

  right: {
    width: "45%",
    margin: "40px",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  title: {
    fontSize: "34px",
    marginBottom: "5px"
  },

  subtitle: {
    marginBottom: "30px",
    color: "#666"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },

  button: {
    marginTop: "15px",
    padding: "14px",
    background: "#1da1b9",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  },

  loginLink: {
    marginTop: "20px"
  },

  link: {
    color: "#1da1b9",
    marginLeft: "5px",
    cursor: "pointer",
    fontWeight: "600"
  }

}

export default SignupPage;