import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand" style={{ marginLeft: "2em" }}>
          Contact Book
        </Link>
        <Link to={"/"} className="navbar-brand">
          <img
            src="./images/user.png"
            style={{ heigth: "30px", width: "30px" }}
          ></img>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
