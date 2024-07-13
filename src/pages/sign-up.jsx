import "./sign-up.css";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="main">
        <img src={Logo} className="logo" />
        <h2>Create account</h2>
        <form>
          <div className="input-box">
            <label className="label">Nickname</label>
            <input className="input" type="text" />
          </div>
          <div className="input-box">
            <label className="label">Email</label>
            <input className="input" type="email" />
          </div>
          <div className="input-box">
            <label className="label">Password</label>
            <input className="input" type="password" />
          </div>
          <div className="input-box">
            <label className="label">Repeat password</label>
            <input className="input" type="password" />
          </div>
          Already have an account?
          <Link to="/Timelines/login">
            <span className="blue-font"> Log in</span>
          </Link>
          <br />
          <input type="submit" className="submit-button" value={"Submit"} />
        </form>
      </div>
    </>
  );
}
