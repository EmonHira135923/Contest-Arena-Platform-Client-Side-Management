import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Trophy,
  Home,
  UserPlus,
  LogIn,
  Compass,
  Sparkles,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import useHooks from "../../Context/useHooks";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logoutUser } = useHooks();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      // Also close mobile menu when clicking outside
      if (!event.target.closest('nav') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = async () => {
    await logoutUser();
    setProfileOpen(false);
    setIsMenuOpen(false);
    navigate("/login");
  };

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "All Contest", path: "/all-contest", icon: <Trophy size={22} /> },
    {
      name: "Why Join Contest",
      path: "/whyjoincontest",
      icon: <Sparkles size={22} />,
    },
  ];

  // Auth items (shown when user is not logged in)
  const authItems = [
    { name: "Register", path: "/register", icon: <UserPlus size={22} /> },
    { name: "Login", path: "/login", icon: <LogIn size={22} /> },
  ];

  // User menu items (shown in profile dropdown)
  const userMenuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
  ];

  return (
    <nav className="bg-black text-white p-4 border-b border-gray-800 sticky top-0 z-50">
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
            <NavLink
              to="/"
              className="flex items-center space-x-3 group"
              onClick={() => setIsMenuOpen(false)}
            >
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

          {/* Right: Auth Buttons or User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              // User is logged in - Show profile dropdown
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-900/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={20} className="text-white" />
                    )}
                  </div>
                  <span className="font-medium">
                    {user.displayName || "User"}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {profileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
                    {/* User Info */}
                    <div className="p-4 border-b border-gray-800">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-500/50">
                          {user.photoURL ? (
                            <img
                              src={user.photoURL}
                              alt={user.displayName || "User"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User size={24} className="text-white" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-sm text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {userMenuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          onClick={() => setProfileOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center space-x-3 px-4 py-3 hover:bg-gray-800/50 transition-colors ${
                              isActive ? "bg-gray-800/30" : ""
                            }`
                          }
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                    </div>

                    {/* Logout Button */}
                    <div className="p-2 border-t border-gray-800">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-400 hover:from-red-600/30 hover:to-red-500/30 hover:text-red-300 transition-all"
                      >
                        <LogOut size={18} />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - Show auth buttons
              authItems.map((item) => (
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
              ))
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[500px] mt-4" : "max-h-0"
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

            {/* Mobile Auth Buttons or User Profile */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              {user ? (
                // Mobile: User is logged in
                <>
                  {/* User Info */}
                  <div className="p-4 rounded-lg bg-gray-800/50 mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-500/50">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt={user.displayName || "User"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User size={24} className="text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-sm text-gray-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Link */}
                  <NavLink
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                  >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                  </NavLink>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-400 hover:from-red-600/30 hover:to-red-500/30 hover:text-red-300 transition-all"
                  >
                    <LogOut size={18} />
                    <span className="font-medium">Logout</span>
                  </button>
                </>
              ) : (
                // Mobile: User is not logged in
                authItems.map((item) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;