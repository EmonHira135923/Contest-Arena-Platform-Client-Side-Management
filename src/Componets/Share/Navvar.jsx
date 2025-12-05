import React, { useState } from "react";
import {
  Menu,
  X,
  Trophy,
  Home,
  UserPlus,
  LogIn,
  Compass,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "All Contest", path: "/all-contest", icon: <Trophy size={22} /> },
    {
      name: "Extra Section",
      path: "/extra-section",
      icon: <Sparkles size={22} />,
    },
  ];

  // Auth items
  const authItems = [
    { name: "Register", path: "/register", icon: <UserPlus size={22} /> },
    { name: "Login", path: "/login", icon: <LogIn size={22} /> },
  ];

  return (
    <nav className="bg-black text-white p-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center">
          {/* Left: Logo and Brand */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Compass size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Creative Arena
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  Where Creativity Meets Competition
                </p>
              </div>
            </NavLink>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-900/50 to-pink-900/30 text-white border-l-4 border-purple-500"
                      : "text-gray-300 hover:text-white hover:bg-gray-900/50"
                  }`
                }
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {authItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-5 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : item.name === "Register"
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                      : "border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-900/50"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-800 p-4">
            {/* Navigation Items */}
            <div className="space-y-2 mb-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-4 rounded-lg transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-purple-900/50 to-pink-900/30 text-white border-l-4 border-purple-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`
                  }
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              {authItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-center space-x-2 p-4 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                        : item.name === "Register"
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
                        : "border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
