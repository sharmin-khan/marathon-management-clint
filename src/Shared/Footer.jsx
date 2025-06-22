import { Link, NavLink } from "react-router";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo3 from "../assets/image/logo3.jpg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo & Description */}
        <div className="flex-1 ">
          <Link to="/" className="flex items-center text-2xl font-bold mb-3">
            <img src={logo3} alt="Logo" className="w-14 h-14 rounded-md" />
            <span>
              <span className="text-blue-600">Marathon</span>
              <span className="text-yellow-400">Pro</span>
            </span>
          </Link>
          <p className="text-md  ">
            MarathonPro helps you discover, join, <br /> and manage marathon
            events easily across the world.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-semibold  py-1 rounded hover:bg-gray-200 ${
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
                  `text-md font-semibold  py-1 rounded hover:bg-gray-200 ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                Marathons
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `text-md font-semibold py-1 rounded hover:bg-gray-200 ${
                        isActive ? "text-blue-600" : "text-gray-700"
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/register"
                    className="text-md font-semibold py-1  rounded text-gray-700 hover:bg-gray-200"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex-1 ">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} MarathonPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
