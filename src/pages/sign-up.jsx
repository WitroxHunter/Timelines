import React, { useState } from "react";
import "./sign-up.css";
import Logo from "../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";

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

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      // Navigate to a different page after successful registration
      navigate("/Timelines");
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
        // Navigate to a different page after successful Google sign-in
        navigate("/Timelines");
      } catch (error) {
        setError(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      <div className="main">
        <img src={Logo} className="logo" alt="Logo" />
        <h2>Create account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label className="label">Nickname</label>
            <input
              className="input"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label className="label">Repeat password</label>
            <input
              className="input"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          Already have an account?
          <Link to="/Timelines/login">
            <span className="blue-font"> Log in</span>
          </Link>
          <br />
          <input type="submit" className="submit-button" value="Submit" />
          <br />
          <button onClick={onGoogleSignIn} disabled={isSigningIn}>
            {isSigningIn ? "Signing in with Google..." : "Sign Up with Google"}
          </button>
        </form>
      </div>
    </>
  );
}
