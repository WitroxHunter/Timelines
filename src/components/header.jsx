import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export default function Header() {
  return (
    <>
      <div className="header" style={{ userSelect: "none" }}>
        <div className="header-logo">
          <img src={Logo} style={{ width: 24 }} />
          Lifelines
        </div>
        <div className="header-buttons-wrapper">
          <Link to={"/Timelines/login"}>
            <button className="button-header">Log in</button>
          </Link>
          <Link to={"/Timelines/sign-up"}>
            <button className="button-header">Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
}
