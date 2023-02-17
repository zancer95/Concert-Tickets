import { useState } from "react";
import FormSignIn from "../FormSignIn";
import FormSignUp from "../FormSignUp";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin ? (
        <>
        <h1 className="title">Favorite-Game</h1>
          <h3 className="semititle">Login</h3>
          <FormSignIn onLogin={onLogin} />
          <div className="container">
            <p>Join us ! &nbsp;</p>
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </div>
        </>
      ) : (
        <>
        <h1 className="title">Favorite-Game</h1>
          <h3 className="semititle">SignUp</h3>
          <FormSignUp onLogin={onLogin} />
          <div className="container">
            <p>Access Profile &nbsp;</p>
            <button onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default Login;