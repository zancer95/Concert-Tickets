import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSignUp({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (

    <form action="/action_page.php" method="post" onSubmit={handleSubmit}>
        <div className="container">
    <label htmlFor="email"><b>Email</b></label>
    <input
      type="text"
      placeholder="Enter Email"
      name="email" required
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="psw"><b>Password</b></label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw" required
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className="signup" type="submit">Sign Up</button>
    {errors.map((err) => (
      <span key={err}>{err} &nbsp;</span>
    ))}
    </div>
    </form>
  );
}
export default FormSignUp;
