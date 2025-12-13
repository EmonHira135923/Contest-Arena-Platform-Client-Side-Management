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
  Terminal,
  BookOpen,
  Sun,
  Moon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import useHooks from "../../Context/useHooks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logoutUser, theme, toggleTheme } = useHooks();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
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

  // Public navigation items (always visible)
  const publicNavItems = [
    { 
      name: "Home", 
      path: "/", 
      icon: <Home size={22} />
    },
    { 
      name: "All Contest", 
      path: "/all-contest", 
      icon: <Trophy size={22} />
    },
    { 
      name: "Why Join Contest", 
      path: "/whyjoincontest", 
      icon: <Sparkles size={22} />
    },
  ];

  // Protected navigation items (only visible when logged in)
  const protectedNavItems = [
    { 
      name: "ProblemSheet", 
      path: "/probleamsheet", 
      icon: <Terminal size={22} />
    },
    { 
      name: "Blogs", 
      path: "/blogs", 
      icon: <BookOpen size={22} />
    },
  ];

  // Combined navigation items based on login status
  const getNavItems = () => {
    if (user) {
      return [...publicNavItems, ...protectedNavItems];
    }
    return publicNavItems;
  };

  const authItems = [
    { name: "Register", path: "/register", icon: <UserPlus size={18} /> },
    { name: "Login", path: "/login", icon: <LogIn size={18} /> },
  ];

  const userMenuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={16} /> },
  ];

  return (
    <nav className="bg-white dark:bg-black text-gray-900 dark:text-white p-3 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-14">
          {/* Left: Logo and Brand */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center space-x-1.5 sm:space-x-2 ml-1 md:ml-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Compass size={14} className="text-white" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Creative Arena
                </h1>
                <p className="hidden xs:block text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                  Where Creativity Meets Competition
                </p>
              </div>
            </NavLink>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1.5 lg:space-x-3">
            {getNavItems().map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-1.5 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg transition-all duration-200 text-sm lg:text-base font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-purple-900/60 to-pink-900/40 text-white shadow-lg shadow-purple-500/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/60 hover:scale-105"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Right: Theme Toggle, Auth Buttons or User Profile */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-purple-400" />
              )}
            </button>

            {user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-1.5 lg:space-x-2 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all hover:scale-105"
                >
                  <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={12} className="text-white" />
                    )}
                  </div>
                  <span className="font-medium text-xs lg:text-sm truncate max-w-[70px] lg:max-w-[100px]">
                    {user.displayName || "User"}
                  </span>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 lg:w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-2 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-500/50">
                          {user.photoURL ? (
                            <img
                              src={user.photoURL}
                              alt={user.displayName || "User"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User size={16} className="text-white" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 dark:text-white truncate text-xs">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="py-1">
                      {userMenuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          onClick={() => setProfileOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-xs ${
                              isActive ? "bg-gray-100 dark:bg-gray-800/30" : ""
                            }`
                          }
                        >
                          {item.icon}
                          <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                        </NavLink>
                      ))}
                    </div>

                    <div className="p-1 border-t border-gray-200 dark:border-gray-800">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-600 dark:text-red-400 hover:from-red-600/30 hover:to-red-500/30 hover:text-red-700 dark:hover:text-red-300 transition-all text-xs"
                      >
                        <LogOut size={14} />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              authItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-1.5 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-lg font-medium transition-all duration-200 text-xs lg:text-sm ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                        : item.name === "Register"
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 hover:scale-105"
                        : "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:scale-105"
                    }`
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-200 dark:border-gray-800 mt-3 p-4">
            {/* Navigation Items */}
            <div className="space-y-1.5 mb-4">
              {getNavItems().map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2.5 p-3 rounded-lg transition-all text-base ${
                      isActive
                        ? "bg-gradient-to-r from-purple-900/60 to-pink-900/40 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:scale-105"
                    }`
                  }
                >
                  {item.icon}
                  <span className="font-semibold">{item.name}</span>
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle for Mobile */}
            <div className="flex justify-center mb-4">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun size={24} className="text-yellow-400" />
                ) : (
                  <Moon size={24} className="text-purple-400" />
                )}
              </button>
            </div>

            {/* Mobile Auth Buttons or User Profile */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
              {user ? (
                <>
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800/50 mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden border-2 border-purple-500/50">
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
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2.5 p-3 rounded-lg bg-gray-100 dark:bg-gray-800/30 hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors mb-2 text-base"
                  >
                    <LayoutDashboard size={20} />
                    <span className="font-medium">Dashboard</span>
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-600 dark:text-red-400 hover:from-red-600/30 hover:to-red-500/30 hover:text-red-700 dark:hover:text-red-300 transition-all text-sm"
                  >
                    <LogOut size={18} />
                    <span className="font-semibold">Logout</span>
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {authItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-center space-x-1.5 p-3 rounded-lg font-semibold transition-all text-sm ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                            : item.name === "Register"
                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 hover:scale-105"
                            : "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 hover:scale-105"
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;