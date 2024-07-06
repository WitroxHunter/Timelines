import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        Header
        <Link to={"/login"}>
          <button className="header-sign-in-button">Sign in</button>
        </Link>
        <Link to={"/sign-up"}>
          <button className="header-sign-up-button">Sign up</button>
        </Link>
      </div>
    </>
  );
}
