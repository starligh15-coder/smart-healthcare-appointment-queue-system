import { useState } from "react";


function BookAppointmentPage() {

    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment Booked Successfully!");
    };

    return (

        <div>



            <div style={styles.page}>

                <h1 style={styles.title}>Book an Appointment</h1>

                <p style={styles.subtitle}>
                    Schedule your visit with our healthcare professionals
                </p>


                <div style={styles.container}>

                    {/* LEFT SIDE FORM */}

                    <div style={styles.formCard}>

                        <h3>Appointment Details</h3>
                        <p style={{ color: "#777" }}>Fill in the required information</p>

                        <form onSubmit={handleSubmit} style={styles.form}>

                            <label>Select Doctor</label>
                            <select
                                value={doctor}
                                onChange={(e) => setDoctor(e.target.value)}
                                style={styles.input}
                            >
                                <option>Choose a doctor</option>
                                <option>Dr Sharma</option>
                                <option>Dr Mehta</option>
                                <option>Dr Kapoor</option>
                            </select>


                            <label>Select Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                style={styles.input}
                            />


                            <label>Select Time Slot</label>
                            <select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                style={styles.input}
                            >
                                <option>Choose time</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 PM</option>
                                <option>02:00 PM</option>
                            </select>


                            <label>Symptoms / Reason for Visit</label>
                            <textarea
                                placeholder="Please describe your symptoms or reason for the appointment..."
                                value={symptoms}
                                onChange={(e) => setSymptoms(e.target.value)}
                                style={styles.textarea}
                            />

                            <button style={styles.button}>
                                Book Appointment
                            </button>

                        </form>

                    </div>



                    {/* RIGHT SIDE PANEL */}

                    <div style={styles.rightPanel}>

                        {/* QUICK GUIDE */}

                        <div style={styles.guideCard}>

                            <h3>Quick Guide</h3>

                            <div style={styles.step}>1️⃣ Choose Doctor</div>
                            <div style={styles.step}>2️⃣ Pick Date & Time</div>
                            <div style={styles.step}>3️⃣ Describe Symptoms</div>
                            <div style={styles.step}>4️⃣ Get Token</div>

                        </div>


                        {/* HELP CARD */}

                        <div style={styles.helpCard}>

                            <h3>Need Help?</h3>

                            <p>
                                Our support team is available 24/7 to assist you
                                with booking appointments.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}



const styles = {

    page: {
        padding: "40px",
        background: "#f5f8fa",
        minHeight: "100vh"
    },

    title: {
        textAlign: "center",
        fontSize: "42px",
        fontWeight: "700",
        marginBottom: "10px",
        color: "#1a1a1a",
        letterSpacing: "1px"
    },

    subtitle: {
        textAlign: "center",
        color: "#6b7280",
        fontSize: "18px",
        marginBottom: "50px"
    },

    container: {
        display: "flex",
        justifyContent: "center",
        gap: "30px"
    },

    formCard: {
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        width: "500px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px"
    },

    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd"
    },

    textarea: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        height: "120px"
    },

    button: {
        marginTop: "10px",
        padding: "14px",
        background: "#1da1b9",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer"
    },

    rightPanel: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },

    guideCard: {
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        width: "250px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)"
    },

    step: {
        marginTop: "10px",
        color: "#444"
    },

    helpCard: {
        background: "#1da1b9",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        width: "250px"
    }

};

export default BookAppointmentPage;