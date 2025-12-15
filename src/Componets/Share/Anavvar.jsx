import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  ChevronDown, 
  Menu,
  Settings,
  LogOut,
  HelpCircle,
  Moon,
  Sun,
  Sparkles
} from 'lucide-react';

const Anavvar = ({ role, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications] = useState(3);

  const getDashboardTitle = () => {
    const titles = {
      admin: "Admin Dashboard",
      creator: "Creator Studio",
      user: "Personal Dashboard"
    };
    return titles[role] || "Dashboard";
  };

  // Unified color scheme matching WhyJoin
  const COLOR_SCHEME = {
    background: 'bg-gradient-to-b from-gray-950 to-black',
    card: 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800',
    primary: {
      gradient: 'from-purple-600 to-pink-500',
      text: 'text-purple-400',
      hover: 'hover:border-purple-500/50'
    },
    secondary: {
      gradient: 'from-gray-800 to-gray-900',
      text: 'text-gray-300',
      hover: 'hover:bg-gray-800'
    }
  };

  const getRoleGradient = () => {
    switch (role) {
      case 'admin': return COLOR_SCHEME.primary.gradient;
      case 'creator': return 'from-pink-600 to-rose-500';
      default: return 'from-cyan-600 to-blue-500';
    }
  };

  return (
    <header className={`w-full h-16 ${COLOR_SCHEME.background} border-b border-gray-800 shadow-lg`}>
      <div className="h-full px-6 flex items-center justify-between">
        
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden" onClick={() => {/* Add sidebar toggle */}}>
            <Menu size={24} className="text-gray-400" />
          </button>
          
          {/* Logo Design */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-500/30">
                <Sparkles size={22} className="text-purple-400" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold tracking-tight text-white">{getDashboardTitle()}</h1>
                <p className="text-xs text-gray-400 font-medium capitalize">
                  {role} Panel • Creative Arena
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search contests, users, or settings..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/50"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            title="Toggle theme"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-amber-300" />
            ) : (
              <Moon size={20} className="text-blue-300" />
            )}
          </button>

          {/* Help */}
          <button
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors hidden sm:block"
            title="Help"
          >
            <HelpCircle size={20} className="text-gray-400" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative">
              <Bell size={20} className="text-gray-400" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse border border-gray-900">
                  {notifications}
                </span>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700"
            >
              <div className="text-right hidden sm:block">
                <p className="font-semibold text-sm text-white">{username || "Guest User"}</p>
                <p className="text-xs text-gray-400 capitalize">{role || "user"}</p>
              </div>
              
              <div className="relative">
                <img
                  src={`https://ui-avatars.com/api/?name=${username || 'Guest'}&background=000&color=fff&bold=true`}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
                />
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                  role === 'admin' ? 'bg-purple-500' : 
                  role === 'creator' ? 'bg-pink-500' : 
                  'bg-cyan-500'
                }`} />
              </div>
              
              <ChevronDown size={18} className={`text-gray-400 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-xl border border-gray-800 py-2 z-50 backdrop-blur-sm">
                <div className="px-4 py-3 border-b border-gray-800">
                  <p className="text-sm font-semibold text-white">{username || "Guest User"}</p>
                  <p className="text-xs text-gray-400 capitalize">{role || "user"}</p>
                </div>
                
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 text-left flex items-center gap-3">
                    <Settings size={16} />
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 text-left flex items-center gap-3">
                    <HelpCircle size={16} />
                    Help & Support
                  </button>
                </div>
                
                <div className="border-t border-gray-800 py-2">
                  <button className="w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-800 text-left flex items-center gap-3">
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Anavvar;