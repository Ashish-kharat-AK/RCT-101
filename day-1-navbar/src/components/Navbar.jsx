import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Links from "./Link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="div">
      <Logo />
      <Links />
      <Button />
    </div>
  );
};

export default Navbar;