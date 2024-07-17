import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={Logo} style={{ width: 24 }} />
          Lifelines
        </div>
        <div>
          <Link to={"/Timelines/login"}>
            <button className="header-sign-in-button">Log in</button>
          </Link>
          <Link to={"/Timelines/sign-up"}>
            <button className="header-sign-up-button">Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
}
