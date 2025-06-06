import React, { useState } from "react";
import "./login-signup.css";

import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doPasswordReset,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

import Logo from "../../public/Logo.png";
import GoogleLogo from "../assets/images/Google__G__logo.svg";

export default function Login() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningInWithGoogle, setIsSigningInWithGoogle] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resetMessage, setResetMessage] = useState("");

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
    if (!isSigningInWithGoogle) {
      setIsSigningInWithGoogle(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningInWithGoogle(false);
      }
    }
  };

  const onPasswordReset = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await doPasswordReset(email);
        setResetMessage("Password reset email sent!");
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("Please enter your email address.");
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/Timelines/app" />;
  }

  return (
    <>
      <div className="main-signup-login">
        <img src={Logo} className="logo" alt="Logo" />
        <h1>Welcome back</h1>
        {errorMessage && (
          <p style={{ color: "red", marginBottom: 5 }}>{errorMessage}</p>
        )}
        {resetMessage && (
          <p style={{ color: "green", marginBottom: 5 }}>{resetMessage}</p>
        )}
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="margin10">
            <span
              className="blue-font"
              onClick={onPasswordReset}
              style={{ cursor: "pointer" }}
            >
              I don't remember my password
            </span>
          </p>
          <button
            className="button-submit"
            type="submit"
            disabled={isSigningIn}
          >
            {isSigningIn ? "Signing in..." : "Continue"}
          </button>
          <p className="margin10">
            Don't have an account?
            <span className="blue-font">
              <Link to="/Timelines/sign-up"> Sign Up</Link>
            </span>
          </p>
          <div className="divider">
            <div className="divider-line"></div>
            <div>OR</div>
            <div className="divider-line"></div>
          </div>
          <button
            className="button-alternative"
            onClick={onGoogleSignIn}
            disabled={isSigningInWithGoogle}
          >
            <img src={GoogleLogo} alt="google" />
            {isSigningInWithGoogle
              ? "Signing in with Google..."
              : "Continue with Google"}
          </button>
        </form>
      </div>
    </>
  );
}
