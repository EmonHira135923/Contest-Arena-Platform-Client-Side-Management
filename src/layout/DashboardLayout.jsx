import React from 'react';
import { Outlet, useLocation, NavLink } from 'react-router';
import { 
  Users, 
  Trophy, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Home,
  Shield,
  UserCog,
  Palette,
  Award,
  Target,
  TrendingUp,
  Bell,
  Calendar,
  DollarSign,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import useHooks from '../context/useHooks';

const DashboardLayout = () => {
  const location = useLocation();
  const { user, userRole } = useHooks();
  
  // Determine dashboard type from route
  const isAdminRoute = location.pathname.includes('/admin');
  const isCreatorRoute = location.pathname.includes('/creative-dashboard') || 
                        location.pathname.includes('/creator');
  const isUserRoute = location.pathname.includes('/user-dashboard') || 
                     (!isAdminRoute && !isCreatorRoute && location.pathname.includes('/dashboard'));

  // Get dashboard type title
  const getDashboardTitle = () => {
    if (isAdminRoute) return "Admin Dashboard";
    if (isCreatorRoute) return "Creator Dashboard";
    return "User Dashboard";
  };

  // Get dashboard description
  const getDashboardDescription = () => {
    if (isAdminRoute) return "Manage platform, users, and contests";
    if (isCreatorRoute) return "Create and manage your contests";
    return "Track your progress and participate in contests";
  };

  // Get dashboard stats based on type
  const getDashboardStats = () => {
    if (isAdminRoute) {
      return [
        { label: "Total Users", value: "5,842", change: "+245", icon: <Users size={20} />, color: "text-purple-400", bgColor: "bg-purple-500/20" },
        { label: "Active Contests", value: "156", change: "+12", icon: <Trophy size={20} />, color: "text-blue-400", bgColor: "bg-blue-500/20" },
        { label: "Revenue", value: "$24.5K", change: "+$2.5K", icon: <CreditCard size={20} />, color: "text-green-400", bgColor: "bg-green-500/20" },
        { label: "Pending Reviews", value: "24", change: "Pending", icon: <FileText size={20} />, color: "text-orange-400", bgColor: "bg-orange-500/20" },
      ];
    }
    
    if (isCreatorRoute) {
      return [
        { label: "My Contests", value: "12", change: "+3", icon: <Trophy size={20} />, color: "text-purple-400", bgColor: "bg-purple-500/20" },
        { label: "Total Submissions", value: "245", change: "+45", icon: <FileText size={20} />, color: "text-blue-400", bgColor: "bg-blue-500/20" },
        { label: "Earnings", value: "$8,450", change: "+$850", icon: <CreditCard size={20} />, color: "text-green-400", bgColor: "bg-green-500/20" },
        { label: "Winners Declared", value: "8", change: "+2", icon: <Award size={20} />, color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
      ];
    }
    
    return [
      { label: "Contests Joined", value: "24", change: "+12%", icon: <Trophy size={20} />, color: "text-purple-400", bgColor: "bg-purple-500/20" },
      { label: "Contests Won", value: "5", change: "+8%", icon: <Award size={20} />, color: "text-green-400", bgColor: "bg-green-500/20" },
      { label: "Submissions", value: "18", change: "+3", icon: <FileText size={20} />, color: "text-blue-400", bgColor: "bg-blue-500/20" },
      { label: "Total Earnings", value: "$2,450", change: "$850", icon: <CreditCard size={20} />, color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
    ];
  };

  // Get dashboard navigation items based on type
  const getDashboardNavItems = () => {
    if (isAdminRoute) {
      return [
        { name: "Overview", path: "/admin", icon: <BarChart3 size={20} /> },
        { name: "Manage Users", path: "/admin/users", icon: <Users size={20} /> },
        { name: "Manage Contests", path: "/admin/contests", icon: <Trophy size={20} /> },
        { name: "Submissions", path: "/admin/submissions", icon: <FileText size={20} /> },
        { name: "Transactions", path: "/admin/transactions", icon: <CreditCard size={20} /> },
        { name: "Analytics", path: "/admin/analytics", icon: <TrendingUp size={20} /> },
        { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
      ];
    }
    
    if (isCreatorRoute) {
      return [
        { name: "Overview", path: "/admin/creative-dashboard", icon: <BarChart3 size={20} /> },
        { name: "My Contests", path: "/creator/contests", icon: <Trophy size={20} /> },
        { name: "Create Contest", path: "/creator/create", icon: <Plus size={20} /> },
        { name: "Submissions", path: "/creator/submissions", icon: <FileText size={20} /> },
        { name: "Declare Winners", path: "/creator/winners", icon: <Award size={20} /> },
        { name: "Earnings", path: "/creator/earnings", icon: <DollarSign size={20} /> },
        { name: "Settings", path: "/creator/settings", icon: <Settings size={20} /> },
      ];
    }
    
    return [
      { name: "Overview", path: "/admin/user-dashboard", icon: <BarChart3 size={20} /> },
      { name: "My Contests", path: "/user/contests", icon: <Trophy size={20} /> },
      { name: "Submissions", path: "/user/submissions", icon: <FileText size={20} /> },
      { name: "Winnings", path: "/user/winnings", icon: <Award size={20} /> },
      { name: "Achievements", path: "/user/achievements", icon: <Target size={20} /> },
      { name: "Payment History", path: "/user/payments", icon: <CreditCard size={20} /> },
      { name: "Settings", path: "/user/settings", icon: <Settings size={20} /> },
    ];
  };

  // Get quick actions based on dashboard type
  const getQuickActions = () => {
    if (isAdminRoute) {
      return [
        { label: "Approve Contests", icon: <CheckCircle size={16} />, count: 5, path: "/admin/contests/pending" },
        { label: "Review Reports", icon: <AlertCircle size={16} />, count: 3, path: "/admin/reports" },
        { label: "Process Payments", icon: <CreditCard size={16} />, count: 8, path: "/admin/transactions/pending" },
      ];
    }
    
    if (isCreatorRoute) {
      return [
        { label: "Review Submissions", icon: <FileText size={16} />, count: 12, path: "/creator/submissions" },
        { label: "Declare Winners", icon: <Award size={16} />, count: 3, path: "/creator/winners" },
        { label: "Create New", icon: <Plus size={16} />, path: "/creator/create" },
      ];
    }
    
    return [
      { label: "Join Contest", icon: <Trophy size={16} />, path: "/all-contests" },
      { label: "Submit Work", icon: <FileText size={16} />, path: "/user/submissions/new" },
      { label: "View Leaderboard", icon: <TrendingUp size={16} />, path: "/leaderboard" },
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left: Brand & Dashboard Type */}
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${
                isAdminRoute 
                  ? 'bg-gradient-to-br from-purple-600 to-pink-500' 
                  : isCreatorRoute 
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-500' 
                  : 'bg-gradient-to-br from-green-600 to-emerald-500'
              }`}>
                {isAdminRoute ? <Shield size={24} className="text-white" /> :
                 isCreatorRoute ? <Palette size={24} className="text-white" /> :
                 <UserCog size={24} className="text-white" />}
              </div>
              <div>
                <h1 className="text-xl font-bold">{getDashboardTitle()}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{getDashboardDescription()}</p>
              </div>
            </div>

            {/* Right: User Info & Actions */}
            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <div className="hidden md:flex items-center space-x-2">
                {getQuickActions().map((action, index) => (
                  <NavLink
                    key={index}
                    to={action.path}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm relative"
                  >
                    {action.icon}
                    <span>{action.label}</span>
                    {action.count && (
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center">
                        {action.count}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Notifications */}
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-semibold">{user?.displayName || 'User'}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {isAdminRoute ? 'Super Admin' : 
                     isCreatorRoute ? 'Content Creator' : 
                     'Contest Participant'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white font-bold">
                      {user?.displayName?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Navigation */}
          <div className="flex overflow-x-auto py-2">
            <div className="flex space-x-1">
              {getDashboardNavItems().map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.name === "Overview"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? `${
                            isAdminRoute 
                              ? 'bg-gradient-to-r from-purple-900/40 to-pink-900/20 text-white border border-purple-500/30' 
                              : isCreatorRoute 
                              ? 'bg-gradient-to-r from-blue-900/40 to-cyan-900/20 text-white border border-blue-500/30' 
                              : 'bg-gradient-to-r from-green-900/40 to-emerald-900/20 text-white border border-green-500/30'
                          }`
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
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
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {getDashboardStats().map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <span className={`text-xs ${
                  stat.change.startsWith('+') ? 'text-green-500 bg-green-500/10' :
                  stat.change.startsWith('$') ? 'text-purple-500 bg-purple-500/10' :
                  stat.change === 'Pending' ? 'text-orange-500 bg-orange-500/10' :
                  'text-blue-500 bg-blue-500/10'
                } px-2 py-1 rounded-full`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-6">
          <Outlet />
        </div>

        {/* Recent Activity */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Deadlines */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-blue-400" />
              Upcoming Deadlines
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                  <div>
                    <p className="font-medium text-sm">Contest {item}</p>
                    <p className="text-xs text-gray-400">Ends in {item * 2} days</p>
                  </div>
                  <button className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Bell size={20} className="text-purple-400" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Bell size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">New submission received</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-400" />
              Performance
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Contest Completion</span>
                  <span className="text-sm font-bold">78%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Win Rate</span>
                  <span className="text-sm font-bold">24%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Active Streak</span>
                  <span className="text-sm font-bold">7 days</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-500/20 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Need Assistance?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {isAdminRoute 
                  ? 'Check admin documentation or contact platform support.' 
                  : 'Visit our help center for guides and tutorials.'}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
                {isAdminRoute ? 'Admin Docs' : 'Help Center'}
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Add missing Plus icon component
const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default DashboardLayout;