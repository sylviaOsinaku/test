import { Link } from "react-router-dom";
function DashNav() {
  return (
    <nav className="position-absolute bg-danger w-25 h-100 px-3">
      <Link to="/" className="text-white d-block">
        Home
      </Link>
      <Link to="/account" className="text-white d-block">
        Account
      </Link>
      <Link to="/user" className="text-white d-block">
        User
      </Link>
    </nav>
  );
}

export default DashNav;
