import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import logo from "../../images/icon-web-01.png";

const Header = () => {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light 
             justify-content-between align-middle"
      >
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <img className="header-logo" src={logo} alt="Logo" />
            Potato Network
          </h1>
        </Link>

        <Search />

        <Menu />
      </nav>
    </div>
  );
};

export default Header;
