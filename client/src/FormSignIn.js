import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signin", {
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
        navigate("/gamecollection")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label> &nbsp;
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> &nbsp;
        <label htmlFor="password">Password</label> &nbsp;
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> &nbsp;
        <button type="submit">Sign In</button>
        {errors.map((err) => (
          <span key={err}>{err} &nbsp;</span>
        ))}
    </form>
  );
}
export default FormSignIn;