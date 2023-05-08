import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const NavBar = () => {
  const [number, setNumber] = useState(8);
  const [showModal, setShowModal] = useState(false);
  const [adminLoggedin, setAdminLoggedIn] = useState(false);
  const [name, setName] = useState("user Default");
  const [extra, setExtra] = useState("extra");
  const changeName = () => {
    setName("Ugonna");
  };

  useEffect(() => {
    //handle componentDidMount and component did updatte
    console.log("Updating!!!");
    //handle component unmount
    return () => {
      console.log("component unmounted");
    };
  }, [number, adminLoggedin]);
  return (
    <nav className=" py-4 navbar-light">
      <div className="container ">
        <a className="navbar-brand" href="#">
          <img
            width="100px"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt="disney logo"
          />
        </a>
        <MenuItem />
      </div>

      {/* <p>Hello {name}</p>
      <p>{number}</p>
      <button onClick={changeName}>change name button</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>

      <button onClick={() => setAdminLoggedIn(true)}>Admin</button>
      <button onClick={() => setAdminLoggedIn(false)}>User</button>

      {adminLoggedin ? <Admin /> : <User />} */}
    </nav>
  );
};

export default NavBar;

const Admin = () => {
  return <h1>I am an Admin</h1>;
};
const User = () => {
  return <h1>I am a User</h1>;
};
