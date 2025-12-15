import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Shield, 
  CheckCircle, 
  XCircle, 
  Trash2, 
  Search, 
  Filter,
  TrendingUp,
  Award,
  BarChart3,
  UserCog,
  Calendar,
  DollarSign,
  Eye,
  MoreVertical,
  ChevronDown,
  RefreshCw,
  Download
} from 'lucide-react';

const AdminDashboard = () => {
  // State for search and filters
  const [userSearch, setUserSearch] = useState('');
  const [contestSearch, setContestSearch] = useState('');
  const [userFilter, setUserFilter] = useState('all');
  const [contestFilter, setContestFilter] = useState('all');
  
  // Dummy data
  const users = [
    { 
      id: 1, 
      name: 'Alex Johnson', 
      email: 'alex@example.com', 
      role: 'user', 
      joined: '2024-01-15',
      contests: 12,
      wins: 3,
      status: 'active',
      avatar: 'AJ'
    },
    { 
      id: 2, 
      name: 'Sarah Chen', 
      email: 'sarah@example.com', 
      role: 'creator', 
      joined: '2024-02-10',
      contests: 8,
      wins: 5,
      status: 'active',
      avatar: 'SC'
    },
    { 
      id: 3, 
      name: 'Mike Wilson', 
      email: 'mike@example.com', 
      role: 'admin', 
      joined: '2024-01-05',
      contests: 24,
      wins: 8,
      status: 'active',
      avatar: 'MW'
    },
    { 
      id: 4, 
      name: 'Emma Davis', 
      email: 'emma@example.com', 
      role: 'user', 
      joined: '2024-03-01',
      contests: 5,
      wins: 0,
      status: 'active',
      avatar: 'ED'
    },
    { 
      id: 5, 
      name: 'James Brown', 
      email: 'james@example.com', 
      role: 'creator', 
      joined: '2024-02-20',
      contests: 15,
      wins: 2,
      status: 'suspended',
      avatar: 'JB'
    },
  ];

  const contests = [
    { 
      id: 1, 
      title: 'UI Design Challenge', 
      creator: 'Sarah Chen',
      participants: 245,
      prize: '$1,500',
      created: '2024-03-10',
      deadline: '2024-03-25',
      status: 'pending',
      category: 'Design'
    },
    { 
      id: 2, 
      title: 'AI Hackathon 2024', 
      creator: 'Mike Wilson',
      participants: 180,
      prize: '$5,000',
      created: '2024-03-05',
      deadline: '2024-03-30',
      status: 'approved',
      category: 'AI/ML'
    },
    { 
      id: 3, 
      title: 'Photo Contest: Nature', 
      creator: 'James Brown',
      participants: 95,
      prize: '$800',
      created: '2024-03-15',
      deadline: '2024-04-05',
      status: 'pending',
      category: 'Photography'
    },
    { 
      id: 4, 
      title: 'CodeFest Programming', 
      creator: 'Alex Johnson',
      participants: 320,
      prize: '$3,000',
      created: '2024-03-01',
      deadline: '2024-03-20',
      status: 'approved',
      category: 'Coding'
    },
    { 
      id: 5, 
      title: 'Business Pitch Competition', 
      creator: 'Sarah Chen',
      participants: 120,
      prize: '$2,500',
      created: '2024-03-12',
      deadline: '2024-04-01',
      status: 'rejected',
      category: 'Business'
    },
  ];

  // Filter users based on search and filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
                         user.email.toLowerCase().includes(userSearch.toLowerCase());
    const matchesFilter = userFilter === 'all' || user.role === userFilter;
    return matchesSearch && matchesFilter;
  });

  // Filter contests based on search and filter
  const filteredContests = contests.filter(contest => {
    const matchesSearch = contest.title.toLowerCase().includes(contestSearch.toLowerCase()) ||
                         contest.creator.toLowerCase().includes(contestSearch.toLowerCase());
    const matchesFilter = contestFilter === 'all' || contest.status === contestFilter;
    return matchesSearch && matchesFilter;
  });

  const handleRoleChange = (userId, newRole) => {
    console.log(`Change role of user ${userId} to ${newRole}`);
    // Add your API call here
  };

  const handleContestAction = (contestId, action) => {
    console.log(`${action} contest ${contestId}`);
    // Add your API call here
  };

  // Stats data
  const stats = [
    { label: "Total Users", value: "1,245", change: "+12%", icon: <Users className="text-purple-400" />, color: "bg-gradient-to-br from-purple-500/20 to-purple-600/10" },
    { label: "Active Contests", value: "156", change: "+8", icon: <Trophy className="text-yellow-400" />, color: "bg-gradient-to-br from-yellow-500/20 to-amber-600/10" },
    { label: "Pending Reviews", value: "24", change: "Need Action", icon: <Shield className="text-blue-400" />, color: "bg-gradient-to-br from-blue-500/20 to-cyan-600/10" },
    { label: "Total Revenue", value: "$24.5K", change: "+15%", icon: <DollarSign className="text-green-400" />, color: "bg-gradient-to-br from-green-500/20 to-emerald-600/10" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4 md:p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <Shield size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                Complete Control & Management Panel
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  stat.change.includes('+') 
                    ? 'bg-green-500/10 text-green-400' 
                    : stat.change.includes('$')
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'bg-yellow-500/10 text-yellow-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-10 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
              <p className="text-gray-400 text-sm">Perform common administrative tasks quickly</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                <RefreshCw size={18} />
                Refresh Data
              </button>
              <button className="px-4 py-2.5 border border-gray-700 text-gray-300 rounded-xl hover:border-purple-500 hover:text-white transition-all flex items-center gap-2">
                <Download size={18} />
                Export Reports
              </button>
            </div>
          </div>
        </div>

        {/* Manage Users Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Users size={28} className="text-purple-400" />
                Manage Users
              </h2>
              <p className="text-gray-400">View and manage all platform users</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 w-full md:w-64"
                />
              </div>
              {/* Filter */}
              <div className="relative">
                <select
                  value={userFilter}
                  onChange={(e) => setUserFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                >
                  <option value="all">All Roles</option>
                  <option value="user">Users</option>
                  <option value="creator">Creators</option>
                  <option value="admin">Admins</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <tr>
                    <th className="p-4 text-left">User</th>
                    <th className="p-4 text-left">Role</th>
                    <th className="p-4 text-left">Joined</th>
                    <th className="p-4 text-left">Contests</th>
                    <th className="p-4 text-left">Wins</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold">
                            {user.avatar}
                          </div>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-400">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.role === 'admin' 
                            ? 'bg-purple-500/20 text-purple-400' 
                            : user.role === 'creator'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-sm">{user.joined}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Trophy size={14} className="text-yellow-400" />
                          <span>{user.contests}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Award size={14} className="text-green-400" />
                          <span>{user.wins}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === 'active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <select
                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                            className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500"
                            defaultValue=""
                          >
                            <option value="" disabled>Change Role</option>
                            <option value="user">User</option>
                            <option value="creator">Creator</option>
                            <option value="admin">Admin</option>
                          </select>
                          <button className="p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                            <MoreVertical size={18} className="text-gray-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-800 text-center text-gray-400 text-sm">
              Showing {filteredUsers.length} of {users.length} users
            </div>
          </div>
        </div>

        {/* Manage Contests Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Trophy size={28} className="text-yellow-400" />
                Manage Contests
              </h2>
              <p className="text-gray-400">Approve, reject, or delete contests</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search contests..."
                  value={contestSearch}
                  onChange={(e) => setContestSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 w-full md:w-64"
                />
              </div>
              {/* Filter */}
              <div className="relative">
                <select
                  value={contestFilter}
                  onChange={(e) => setContestFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>

          {/* Contests Table */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <tr>
                    <th className="p-4 text-left">Contest</th>
                    <th className="p-4 text-left">Creator</th>
                    <th className="p-4 text-left">Category</th>
                    <th className="p-4 text-left">Participants</th>
                    <th className="p-4 text-left">Prize</th>
                    <th className="p-4 text-left">Deadline</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContests.map((contest) => (
                    <tr key={contest.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="font-semibold">{contest.title}</p>
                          <p className="text-sm text-gray-400">Created: {contest.created}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-300">{contest.creator}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                          {contest.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Users size={14} className="text-gray-400" />
                          <span>{contest.participants}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <DollarSign size={14} className="text-yellow-400" />
                          <span className="font-semibold">{contest.prize}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-sm">{contest.deadline}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          contest.status === 'approved' 
                            ? 'bg-green-500/20 text-green-400' 
                            : contest.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {contest.status.charAt(0).toUpperCase() + contest.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {contest.status === 'pending' && (
                            <>
                              <button
                                onClick={() => handleContestAction(contest.id, 'Confirm')}
                                className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors flex items-center gap-1"
                              >
                                <CheckCircle size={14} />
                                <span>Confirm</span>
                              </button>
                              <button
                                onClick={() => handleContestAction(contest.id, 'Reject')}
                                className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors flex items-center gap-1"
                              >
                                <XCircle size={14} />
                                <span>Reject</span>
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => handleContestAction(contest.id, 'Delete')}
                            className="px-3 py-1.5 bg-gray-800 text-gray-400 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors flex items-center gap-1"
                          >
                            <Trash2 size={14} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-800 text-center text-gray-400 text-sm">
              Showing {filteredContests.length} of {contests.length} contests
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-10 p-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 border border-purple-800/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Administrator Guidelines</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            As an administrator, you have full control over the platform. Use your powers responsibly 
            to maintain a fair and engaging environment for all users and creators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-900/50 rounded-xl">
              <CheckCircle size={24} className="text-green-400 mb-2 mx-auto" />
              <p className="text-sm">Review contests carefully before approval</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl">
              <Shield size={24} className="text-blue-400 mb-2 mx-auto" />
              <p className="text-sm">Ensure user roles are assigned appropriately</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl">
              <BarChart3 size={24} className="text-purple-400 mb-2 mx-auto" />
              <p className="text-sm">Monitor platform performance regularly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;