import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to={"/Timelines/login"}>
          <button className="header-sign-in-button">Log in</button>
        </Link>
        <Link to={"/Timelines/sign-up"}>
          <button className="header-sign-up-button">Sign up</button>
        </Link>
      </div>
    </>
  );
}
