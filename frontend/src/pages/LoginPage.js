import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

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
          <h2 style={styles.heading}>Welcome to Modern Healthcare</h2>

          <div style={styles.feature}>✔ Intelligent appointment scheduling</div>
          <div style={styles.feature}>✔ Real-time queue tracking</div>
          <div style={styles.feature}>✔ AI-powered emergency assessment</div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>

        <h1 style={styles.title}>Access Your Account</h1>
        <p style={styles.subtitle}>
          Sign in to manage your healthcare appointments
        </p>

        <form onSubmit={handleLogin} style={styles.form}>

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
          <select style={styles.input}>
            <option>Patient</option>
            <option>Doctor</option>
            <option>Admin</option>
          </select>

          <button style={styles.button}>
            Sign In
          </button>

        </form>

        <p style={styles.forgot}>Forgot your password?</p>

        <p style={styles.back} onClick={() => navigate("/")}>
          ← Back to Home
        </p>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Segoe UI",
    background: "#f3f7f9"
  },

  left: {
    width: "50%",
    padding: "40px",
    background: "#eaf4f6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  image: {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "25px",
    objectFit: "cover"
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
    fontSize: "36px",
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

  forgot: {
    marginTop: "15px",
    color: "#1da1b9",
    cursor: "pointer"
  },

  back: {
    marginTop: "20px",
    cursor: "pointer",
    color: "#555"
  }

};

export default LoginPage;