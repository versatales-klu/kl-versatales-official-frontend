import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => { 
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }

    // TODO: Integrate API call here
    console.log("Login submitted:", form);

    // Simulate success (navigate to dashboard or homepage)
    // navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    // TODO: Route to Forgot Password page
    navigate("/forgot-password");
  };

  const handleSignUp = () => {
    // Route to Sign Up page
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Versatiles</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-footer">
          <button
            type="button"
            className="forgot-password-btn"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>

          <button
            type="button"
            className="signup-btn"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;