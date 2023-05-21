import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <h1>SEC</h1>
        <Link index to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
};

export default Header;
