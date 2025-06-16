import React from "react";
import "../styles.css";
function Register() {
  return (
    <div className="page-container">
      <h1>Register</h1>
      <div className="form-container">
        <input type="text" placeholder="Username" defaultValue="testuser" />
        <input type="email" placeholder="Email" defaultValue="test@example.com" />
        <input type="password" placeholder="Password" defaultValue="password123" />
        <button>Register</button>
      </div>
    </div>
  );
}
export default Register;
