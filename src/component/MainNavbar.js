import React from "react";
import { IoIosNotifications } from "react-icons/io";
import logo from "./loger.png";
function MainNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
            PEOPLE.COM
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form className="form-inline my-2 my-lg-0">
            <span style={{ fontSize: "x-large" }}>
              <IoIosNotifications />
            </span>
            <img
              src={logo}
              alt="profile"
              style={{ height: "50px", borderRadius: "40%" }}
            />
            <p>Vpatil</p>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
