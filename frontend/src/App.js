import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";

function App() {
  return (
    <Router>

      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/book" element={<BookAppointmentPage />} />

      </Routes>

    </Router>
  );
}

export default App;