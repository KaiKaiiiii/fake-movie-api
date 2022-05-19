import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
        >
          Movies
        </NavLink>
      </header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Header;
