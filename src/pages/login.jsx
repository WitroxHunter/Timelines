import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import "./login.css";

import Logo from "../assets/images/Logo.png";

export default function Login() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/Timelines/app" />;
  }

  return (
    <>
      <div className="main">
        <img src={Logo} className="logo" />
        <h2>Welcome back</h2>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          Don't have an account?
          <span className="blue-font">
            <Link to="/Timelines/sign-up"> Sign Up</Link>
          </span>
          <br />
          <button
            className="submit-button"
            type="submit"
            disabled={isSigningIn}
          >
            {isSigningIn ? "Signing in..." : "Continue"}
          </button>
          <br />
          <button onClick={onGoogleSignIn} disabled={isSigningIn}>
            {isSigningIn ? "Signing in with Google..." : "Sign In with Google"}
          </button>
        </form>
      </div>
    </>
  );
}
