
import React, { useState } from "react";

const Signup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log("Signup Data:", formData);
    alert("Signup successful!");

    // Clear form
    setFormData({
      username: "",
      email: "",
      password: "",
    });

    if (onClose) onClose();
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
        <button type="button" style={{...styles.button, backgroundColor: "#888", marginTop: "10px"}} onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

// Inline CSS styles

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  }
};

const Header = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
     
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-3 text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3 text-white">
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search post here..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => setShowSignup(true)}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Header;