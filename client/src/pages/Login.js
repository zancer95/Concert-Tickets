import { useState } from "react";
import FormSignIn from "../FormSignIn";
import FormSignUp from "../FormSignUp";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {showLogin ? (
        <>
          <h3>Login</h3>
          <FormSignIn onLogin={onLogin} />
          <hr className="solid"/>
          <p>
            Join us !  &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <h3>SignUp</h3>
          <FormSignUp onLogin={onLogin} />
          <hr class='solid'/>
          <p>
            Access Profile &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </p>
        </>
      )}
    </>
  );
}
export default Login;