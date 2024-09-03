import React from "react";
import "./Navbar.css";
import { FaFilter } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Team members
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button className="nav-link" style={{ borderRadius: "100px" }}>
                100 users
              </button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{ marginRight: "2px" }}
            >
              Search
            </button>
            <FaFilter />
            <button className="btn btn-primary">+ ADD MEMBER</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
