import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Users,
  Trophy,
  BarChart,
  FilePlus,
  FolderOpen,
  Inbox,
  UserCircle,
  Award,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
  PenTool,
  User,
  TrendingUp,
  HelpCircle,
  Bell,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

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

const Aside = ({ role }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const getRoleIcon = () => {
    switch (role) {
      case 'admin': return <Shield size={24} className="text-purple-400" />;
      case 'creator': return <PenTool size={24} className="text-pink-400" />;
      default: return <User size={24} className="text-cyan-400" />;
    }
  };

  const getRoleGradient = () => {
    switch (role) {
      case 'admin': return COLOR_SCHEME.primary.gradient;
      case 'creator': return 'from-pink-600 to-rose-500';
      default: return 'from-cyan-600 to-blue-500';
    }
  };

  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} />, badge: null },
      { name: "Manage Users", path: "/admin/users", icon: <Users size={20} />, badge: "12" },
      { name: "Manage Contests", path: "/admin/contests", icon: <Trophy size={20} />, badge: "5" },
      { name: "Reports", path: "/admin/reports", icon: <BarChart size={20} />, badge: "3" },
      { name: "Analytics", path: "/admin/analytics", icon: <TrendingUp size={20} />, badge: null },
      { name: "System Logs", path: "/admin/logs", icon: <FilePlus size={20} />, badge: null },
    ],
    creative: [
      { name: "Dashboard", path: "/creator", icon: <LayoutDashboard size={20} />, badge: null },
      { name: "Add Contest", path: "/creator/add-contest", icon: <FilePlus size={20} />, badge: "New" },
      { name: "My Contests", path: "/creator/my-contests", icon: <FolderOpen size={20} />, badge: "8" },
      { name: "Submitted Tasks", path: "/creator/submissions", icon: <Inbox size={20} />, badge: "24" },
      { name: "Performance", path: "/creator/performance", icon: <TrendingUp size={20} />, badge: null },
      { name: "Earnings", path: "/creator/earnings", icon: <Award size={20} />, badge: "$1.2k" },
    ],
    user: [
      { name: "Dashboard", path: "/user", icon: <LayoutDashboard size={20} />, badge: null },
      { name: "Participated Contests", path: "/user/participated", icon: <Trophy size={20} />, badge: "7" },
      { name: "Winning Contests", path: "/user/winnings", icon: <Award size={20} />, badge: "3" },
      { name: "My Profile", path: "/user/profile", icon: <UserCircle size={20} />, badge: null },
      { name: "Notifications", path: "/user/notifications", icon: <Bell size={20} />, badge: "5" },
      { name: "Help Center", path: "/user/help", icon: <HelpCircle size={20} />, badge: null },
    ],
  };

  const bottomMenu = [
    { name: "Settings", icon: <Settings size={20} />, path: `/${role}/settings` },
    { name: "Help & Support", icon: <HelpCircle size={20} />, path: "/help" },
    { name: "Logout", icon: <LogOut size={20} />, path: "/logout" },
  ];

  const currentMenu = menuItems[role] || [];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gradient-to-r ${getRoleGradient()} text-white shadow-lg`}
      >
        {collapsed ? <Menu size={24} /> : <X size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        ${collapsed ? 'w-20' : 'w-64'} 
        h-screen ${COLOR_SCHEME.background} text-white 
        flex flex-col transition-all duration-300 ease-in-out
        fixed lg:relative z-40
        transform ${collapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}
        shadow-2xl border-r border-gray-800
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className={`
                relative w-12 h-12 rounded-xl
                bg-gradient-to-r ${getRoleGradient()}
                flex items-center justify-center
                shadow-lg
              `}>
                <Sparkles size={28} className="text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400 animate-pulse" />
              </div>
              
              {!collapsed && (
                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    {role === "admin" ? "Admin" : 
                     role === "creator" ? "Creator" : "User"} Panel
                  </h1>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                    {getRoleIcon()}
                    <span className="capitalize">{role} Dashboard</span>
                  </p>
                </div>
              )}
            </div>
            
            {/* Collapse Button */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:block p-2 rounded-lg hover:bg-gray-800 transition-colors"
              title={collapsed ? "Expand" : "Collapse"}
            >
              <ChevronRight className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {currentMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl
                    transition-all duration-200
                    ${isActive 
                      ? `bg-gradient-to-r ${getRoleGradient()} text-white shadow-lg` 
                      : 'hover:bg-gray-800/50'
                    }
                    ${collapsed ? 'justify-center' : ''}
                    border border-transparent hover:border-gray-700
                  `}
                  onClick={() => setActiveMenu(item.name)}
                >
                  <div className={`${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {item.icon}
                  </div>
                  
                  {!collapsed && (
                    <>
                      <span className="flex-1 font-medium">{item.name}</span>
                      {item.badge && (
                        <span className={`
                          px-2 py-1 text-xs rounded-full
                          ${isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-800 text-gray-300'
                          }
                        `}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-800" />

          {/* Quick Stats */}
          {!collapsed && (
            <div className="mb-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Quick Stats</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">Today</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Active</span>
                  <span className={`font-bold text-sm bg-gradient-to-r ${getRoleGradient()} bg-clip-text text-transparent`}>
                    {role === 'admin' ? '42' : role === 'creator' ? '8' : '7'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Pending</span>
                  <span className="font-bold text-amber-400 text-sm">
                    {role === 'admin' ? '3' : role === 'creator' ? '5' : '2'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-gray-800">
          <div className="space-y-2">
            {bottomMenu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-xl
                  hover:bg-gray-800/50 transition-all duration-200
                  border border-transparent hover:border-gray-700
                  ${collapsed ? 'justify-center' : ''}
                `}
              >
                <div className="text-gray-400">
                  {item.icon}
                </div>
                {!collapsed && (
                  <span className="flex-1 font-medium text-gray-300">{item.name}</span>
                )}
              </Link>
            ))}
          </div>

          {/* User Info */}
          {!collapsed && (
            <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={`https://ui-avatars.com/api/?name=${role}&background=fff&color=${role === 'admin' ? '7c3aed' : role === 'creator' ? 'ec4899' : '06b6d4'}&bold=true`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-gray-700"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                    role === 'admin' ? 'bg-purple-500' : 
                    role === 'creator' ? 'bg-pink-500' : 
                    'bg-cyan-500'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-300 capitalize">{role} Account</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
};

export default Aside;