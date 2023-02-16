import React, { useState } from "react";

function FormSignUp({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
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
      } else {
        r.json().then((flaw) => setErrors(flaw.errors));
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
        <button type="submit">Sign Up</button>
        {errors.map((err) => (
          <span key={err}>{err} &nbsp;</span>
        ))}
    </form>
  );
}
export default FormSignUp;
