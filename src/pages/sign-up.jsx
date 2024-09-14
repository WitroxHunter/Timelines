import React, { useState } from "react";
import "./login-signup.css";

import Logo from "../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import GoogleLogo from "../assets/images/Google__G__logo.svg";
import { auth, firestore } from "../firebase/firebase";

export default function SignUp() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }
    if (nickname == "" || nickname == null) {
      setError("Nickname field is empty");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      await doCreateUserWithEmailAndPassword(email, password, nickname);
      navigate("/Timelines/login");
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error.message);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/Timelines/app");
      } catch (error) {
        setError(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      <div className="main-signup-login">
        <img src={Logo} className="logo" alt="Logo" />
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              placeholder="Nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              placeholder="Repeat password"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <p>
            {error && <p className="error">{error}</p>}
            Already have an account?
            <Link to="/Timelines/login">
              <span className="blue-font"> Log in</span>
            </Link>
          </p>
          <button type="submit" className="button-submit">
            Sign Up
          </button>
          <div className="divider">
            <div className="divider-line"></div>
            <div>OR</div>
            <div className="divider-line"></div>
          </div>
          <button
            className="button-alternative"
            onClick={onGoogleSignIn}
            disabled={isSigningIn}
          >
            <img src={GoogleLogo} alt="google" />
            {isSigningIn ? "Signing in with Google..." : "Sign Up with Google"}
          </button>
        </form>
      </div>
    </>
  );
}
