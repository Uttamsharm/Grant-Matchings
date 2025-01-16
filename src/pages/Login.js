import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.js";
import "./Login.css";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display error messages
  const [loading, setLoading] = useState(false); // To show loading state while login

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError(""); // Clear error if inputs are valid
    setLoading(true);

    try {
      await loginUser(email, password);
    } catch (err) {
      setError("Invalid email or password"); // Set error on failed login
    } finally {
      setLoading(false); // Stop loading animation after login attempt
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
