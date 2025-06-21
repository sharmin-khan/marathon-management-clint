// src/components/Navbar.jsx
import { Link, NavLink } from "react-router";
import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/marathons">Marathons</NavLink></li>
      {user ? (
        <>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><button onClick={logoutUser}>Logout</button></li>
        </>
      ) : (
        <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Left side - Logo only */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold"> MarathonPro</Link>
      </div>

      {/* Right side - Links and avatar */}
      <div className="navbar-end">
        {/* Large screen links */}
        <ul className="menu menu-horizontal hidden lg:flex gap-2 px-1">
          {navLinks}
        </ul>

        {/* Avatar */}
        {user?.photoURL ? (
          <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full ml-4" />
        ) : user ? (
          <FaUserCircle className="text-2xl ml-4" />
        ) : null}

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden ml-2">
          <label tabIndex={0} className="btn btn-ghost">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;