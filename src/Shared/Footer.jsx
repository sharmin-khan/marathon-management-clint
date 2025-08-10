import { Link, NavLink } from "react-router";
import { FaYoutube, FaFacebookF, FaInstagram, FaRunning, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="my-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-11/12 mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center text-2xl font-bold mb-6 group">
              
                  <FaRunning size={28} className="text-white" />
               
                <span>
                  <span className="text-white">Marathon</span>
                  <span className="text-yellow-400">Pro</span>
                </span>
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-xs">
                MarathonPro helps you discover, join, and manage marathon events easily across the world. Your journey to greatness starts here.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <FaMapMarkerAlt className="text-blue-400 mr-3" />
                  <span>123 Running Street, Marathon City</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <FaPhone className="text-blue-400 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <FaEnvelope className="text-blue-400 mr-3" />
                  <span>info@marathonpro.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1 ${
                        isActive ? "text-blue-400 font-semibold" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/marathonCard"
                    className={({ isActive }) =>
                      `inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1 ${
                        isActive ? "text-blue-400 font-semibold" : ""
                      }`
                    }
                  >
                    Marathons
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1 ${
                        isActive ? "text-blue-400 font-semibold" : ""
                      }`
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1 ${
                        isActive ? "text-blue-400 font-semibold" : ""
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* User Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                {user ? "Dashboard" : "Get Started"}
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {user ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                          `inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1 ${
                            isActive ? "text-blue-400 font-semibold" : ""
                          }`
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addMarathons"
                        className="inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1"
                      >
                        Add Marathon
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/myMarathonList"
                        className="inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1"
                      >
                        My Marathons
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/myApply"
                        className="inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1"
                      >
                        My Apply
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/login"
                        className="inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/register"
                        className="inline-block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-1"
                      >
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <span className="inline-block text-gray-500 py-1 text-sm">
                        Join our community
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Connect With Us
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h3>
              
              {/* Social Links */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-4">Follow us on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <FaYoutube size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-gray-300 text-sm mb-3">Stay updated with latest marathons</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-r-lg transition-all duration-300 transform hover:scale-105">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                &copy; {currentYear} MarathonPro. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <FaHeart className="text-red-500 animate-pulse" />
                  <span>for runners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
