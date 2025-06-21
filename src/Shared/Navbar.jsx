import { Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import logo3 from "../assets/image/logo3.jpg";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        console.log("signed out user");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base lg:text-sm xl:text-lg font-bold px-3 py-1 rounded hover:bg-gray-200 ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/marathons"
          className={({ isActive }) =>
            `text-base lg:text-sm xl:text-lg font-bold px-3 py-1 rounded hover:bg-gray-200 ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          Marathons
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-base lg:text-sm xl:text-lg font-bold px-3 py-1 rounded hover:bg-gray-200 ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left side - Logo */}
      <div className="navbar-start flex items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src={logo3} alt="Logo" className="w-14 h-14 rounded-md" />
          <span>
            <span className="text-blue-600">Marathon</span>
            <span className="text-yellow-400">Pro</span>
          </span>
        </Link>
      </div>

      {/* Right side */}
      <div className="navbar-end flex items-center gap-4">
        {/* Large screen menu */}
        <ul className="menu menu-horizontal hidden lg:flex gap-4 px-1 items-center">
          {navLinks}
          {/* Avatar at top */}
    {user?.photoURL ? (
      <li className="flex justify-center">
        <img
          src={user.photoURL}
          alt="user"
          className="w-16 h-14 rounded-full"
        />
      </li>
    ) : user ? (
      <li className="flex justify-center">
        <FaUserCircle className="text-2xl" />
      </li>
    ) : null}
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-sm xl:text-base font-bold px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-sm xl:text-base font-bold px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-sm xl:text-base font-bold px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Register
              </NavLink>
            </>
          )}
        </ul>

     
        {/* Mobile Dropdown */}
<div className="dropdown dropdown-end lg:hidden">
  <label tabIndex={0} className="btn btn-ghost">
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </label>
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
  >
   

    {navLinks}
     {/* Avatar at top */}
    {user?.photoURL ? (
      <li className="flex justify-center">
        <img
          src={user.photoURL}
          alt="user"
          className="w-16 h-14 rounded-full"
        />
      </li>
    ) : user ? (
      <li className="flex justify-center">
        <FaUserCircle className="text-2xl" />
      </li>
    ) : null}

    {/* Logout or Login/Register */}
    {user ? (
      <li>
        <button
          onClick={handleLogOut}
          className="text-base font-bold px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 w-full"
        >
          Logout
        </button>
      </li>
    ) : (
      <>
        <li>
          <NavLink
            to="/login"
            className="text-base font-bold px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="text-base font-bold px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 w-full"
          >
            Register
          </NavLink>
        </li>
      </>
    )}
  </ul>
</div>

      </div>
    </div>
  );
};

export default Navbar;
