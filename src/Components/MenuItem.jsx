import { Link } from "react-router-dom";
const MenuItem = () => {
  return (
    <ul className=" menu-items float-end list-unstyled">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="">Services</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
  );
};

export default MenuItem;
