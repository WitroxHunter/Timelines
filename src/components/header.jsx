import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        Header
        <Link to={"/app"}>
          <button className="header-sign-in-button">Sign in</button>
        </Link>
        <button className="header-sign-up-button">Sign up</button>
      </div>
    </>
  );
}
