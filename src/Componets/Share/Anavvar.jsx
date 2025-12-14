import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  UserCog, 
  Shield, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  ChevronDown,
  Users,
  Trophy,
  FileText,
  CreditCard,
  LogOut,
  Home,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Filter
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import useHooks from '../../Context/useHooks';

const Anavvar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, logoutUser, theme, toggleTheme } = useHooks();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  const adminNavItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <BarChart3 size={20} /> },
    { name: "Manage Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Manage Contests", path: "/admin/contests", icon: <Trophy size={20} /> },
    { name: "Submissions", path: "/admin/submissions", icon: <FileText size={20} /> },
    { name: "Transactions", path: "/admin/transactions", icon: <CreditCard size={20} /> },
    { name: "Analytics", path: "/admin/analytics", icon: <TrendingUp size={20} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
  ];

  const notifications = [
    { id: 1, title: "New Contest Submission", message: "UI Design Challenge needs review", time: "2 min ago", type: "warning" },
    { id: 2, title: "Payment Received", message: "Contest entry fee from John Doe", time: "15 min ago", type: "success" },
    { id: 3, title: "User Report", message: "Inappropriate content reported", time: "1 hour ago", type: "alert" },
    { id: 4, title: "Contest Approved", message: "AI Hackathon is now live", time: "3 hours ago", type: "success" },
  ];

  const stats = [
    { label: "Pending Reviews", value: "12", color: "text-yellow-400", change: "+2" },
    { label: "Active Users", value: "1,245", color: "text-green-400", change: "+5%" },
    { label: "Revenue Today", value: "$2,850", color: "text-purple-400", change: "+12%" },
  ];

  const quickActions = [
    { label: "Approve Contests", icon: <CheckCircle size={16} />, count: 5 },
    { label: "Review Reports", icon: <AlertCircle size={16} />, count: 3 },
    { label: "Process Payments", icon: <CreditCard size={16} />, count: 8 },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-950 text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo & Brand */}
            <NavLink to="/admin/dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                <Shield size={24} className="text-white" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-xs text-gray-400">Creative Arena Management</p>
              </div>
            </NavLink>
          </div>

          {/* Center: Search & Stats */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="hidden md:flex items-center space-x-6">
              {/* Quick Stats */}
              <div className="flex items-center space-x-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">{stat.label}</span>
                      <span className="text-xs text-green-400">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Admin Controls */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Search size={20} />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-gray-800">
                    <h3 className="font-bold flex items-center gap-2">
                      <Bell size={18} />
                      Notifications
                      <span className="ml-2 px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                        {notifications.length} new
                      </span>
                    </h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${
                            notification.type === 'success' ? 'bg-green-900/30 text-green-400' :
                            notification.type === 'warning' ? 'bg-yellow-900/30 text-yellow-400' :
                            'bg-red-900/30 text-red-400'
                          }`}>
                            {notification.type === 'success' ? <CheckCircle size={16} /> :
                             notification.type === 'warning' ? <AlertCircle size={16} /> :
                             <AlertCircle size={16} />}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{notification.title}</h4>
                            <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-800">
                    <button className="w-full py-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors relative group"
                >
                  {action.icon}
                  <span className="text-sm">{action.label}</span>
                  {action.count > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center">
                      {action.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3 border-l border-gray-800 pl-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-semibold">{user?.displayName || "Admin"}</span>
                <span className="text-xs text-gray-400">Super Admin</span>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="Admin" className="w-full h-full object-cover" />
                    ) : (
                      <UserCog size={18} className="text-white" />
                    )}
                  </div>
                  <ChevronDown size={16} />
                </button>

                {/* Profile Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden">
                        {user?.photoURL ? (
                          <img src={user.photoURL} alt="Admin" className="w-full h-full object-cover" />
                        ) : (
                          <UserCog size={20} className="text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{user?.displayName || "Admin"}</p>
                        <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <NavLink
                      to="/admin/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 transition-colors text-sm"
                    >
                      <UserCog size={16} />
                      <span>Profile Settings</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 transition-colors text-sm"
                    >
                      <Home size={16} />
                      <span>User Dashboard</span>
                    </NavLink>
                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 transition-colors text-sm text-left"
                    >
                      <Settings size={16} />
                      <span>Toggle Theme</span>
                    </button>
                  </div>
                  <div className="p-2 border-t border-gray-800">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-400 hover:from-red-600/30 hover:to-red-500/30 hover:text-red-300 transition-all text-sm"
                    >
                      <LogOut size={16} />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-800">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users, contests, transactions..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg text-sm">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Admin Navigation (Desktop) */}
        <div className="hidden lg:flex items-center space-x-1 border-t border-gray-800 py-2">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-900/40 to-pink-900/20 text-white border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Admin Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-lg">
            <div className="grid grid-cols-2 gap-2">
              {adminNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-purple-900/40 to-pink-900/20 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
              <h4 className="text-sm font-bold mb-2">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-2 rounded bg-gray-900/50">
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Anavvar;