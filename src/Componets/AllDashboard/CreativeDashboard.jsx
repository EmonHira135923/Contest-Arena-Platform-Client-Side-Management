import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  TrendingUp,
  Award,
  Calendar,
  Eye,
  MoreVertical,
  ChevronDown,
  Upload,
  Plus,
  FileText,
  Image as ImageIcon,
  Settings,
  Star
} from 'lucide-react';

const CreativeDashboard = () => {
  // State for search and filters
  const [contestSearch, setContestSearch] = useState('');
  const [submissionSearch, setSubmissionSearch] = useState('');
  const [contestFilter, setContestFilter] = useState('all');
  const [submissionFilter, setSubmissionFilter] = useState('all');
  
  // Dummy data
  const myContests = [
    { 
      id: 1, 
      name: 'UI Design Challenge', 
      status: 'Active', 
      participants: 245,
      prize: '$1,500',
      created: '2024-03-10',
      deadline: '2024-03-25',
      submissions: 45,
      type: 'Design'
    },
    { 
      id: 2, 
      name: 'Logo Creation', 
      status: 'Pending', 
      participants: 120,
      prize: '$800',
      created: '2024-03-15',
      deadline: '2024-04-05',
      submissions: 18,
      type: 'Branding'
    },
    { 
      id: 3, 
      name: 'Web App Interface', 
      status: 'Completed', 
      participants: 320,
      prize: '$3,000',
      created: '2024-03-01',
      deadline: '2024-03-20',
      submissions: 67,
      type: 'UI/UX'
    },
    { 
      id: 4, 
      name: 'Mobile App Design', 
      status: 'Active', 
      participants: 180,
      prize: '$2,500',
      created: '2024-03-12',
      deadline: '2024-04-01',
      submissions: 32,
      type: 'Mobile'
    },
    { 
      id: 5, 
      name: 'Brand Identity Kit', 
      status: 'Draft', 
      participants: 0,
      prize: '$1,200',
      created: '2024-03-18',
      deadline: '2024-04-10',
      submissions: 0,
      type: 'Branding'
    },
  ];

  const submissions = [
    { 
      id: 1, 
      participant: 'Alex Johnson', 
      email: 'alex@example.com', 
      contest: 'UI Design Challenge', 
      taskInfo: 'Complete UI design with wireframes...',
      submitted: '2024-03-18',
      rating: 4.5,
      status: 'Pending',
      avatar: 'AJ'
    },
    { 
      id: 2, 
      participant: 'Sarah Chen', 
      email: 'sarah@example.com', 
      contest: 'UI Design Challenge', 
      taskInfo: 'Interactive prototype included...',
      submitted: '2024-03-19',
      rating: 4.8,
      status: 'Reviewed',
      avatar: 'SC'
    },
    { 
      id: 3, 
      participant: 'Mike Wilson', 
      email: 'mike@example.com', 
      contest: 'Logo Creation', 
      taskInfo: 'Logo with brand guidelines...',
      submitted: '2024-03-20',
      rating: 4.2,
      status: 'Winner',
      avatar: 'MW'
    },
    { 
      id: 4, 
      participant: 'Emma Davis', 
      email: 'emma@example.com', 
      contest: 'Web App Interface', 
      taskInfo: 'Full design system created...',
      submitted: '2024-03-17',
      rating: 4.9,
      status: 'Pending',
      avatar: 'ED'
    },
    { 
      id: 5, 
      participant: 'James Brown', 
      email: 'james@example.com', 
      contest: 'Mobile App Design', 
      taskInfo: 'Responsive mobile designs...',
      submitted: '2024-03-16',
      rating: 4.3,
      status: 'Reviewed',
      avatar: 'JB'
    },
  ];

  // Filter contests based on search and filter
  const filteredContests = myContests.filter(contest => {
    const matchesSearch = contest.name.toLowerCase().includes(contestSearch.toLowerCase());
    const matchesFilter = contestFilter === 'all' || contest.status.toLowerCase() === contestFilter;
    return matchesSearch && matchesFilter;
  });

  // Filter submissions based on search and filter
  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = sub.participant.toLowerCase().includes(submissionSearch.toLowerCase()) ||
                         sub.contest.toLowerCase().includes(submissionSearch.toLowerCase());
    const matchesFilter = submissionFilter === 'all' || sub.status.toLowerCase() === submissionFilter;
    return matchesSearch && matchesFilter;
  });

  const handleContestAction = (contestId, action) => {
    console.log(`${action} contest ${contestId}`);
    // Add your API call here
  };

  const handleDeclareWinner = (submissionId) => {
    console.log(`Declare winner for submission ${submissionId}`);
    // Add your API call here
  };

  // Stats data
  const stats = [
    { label: "Active Contests", value: "3", change: "+1", icon: <Trophy className="text-yellow-400" />, color: "bg-gradient-to-br from-yellow-500/20 to-amber-600/10" },
    { label: "Total Submissions", value: "162", change: "+12", icon: <Users className="text-purple-400" />, color: "bg-gradient-to-br from-purple-500/20 to-purple-600/10" },
    { label: "Total Prize Pool", value: "$9,000", change: "+$2,500", icon: <DollarSign className="text-green-400" />, color: "bg-gradient-to-br from-green-500/20 to-emerald-600/10" },
    { label: "Avg. Rating", value: "4.5", change: "+0.3", icon: <Star className="text-blue-400" />, color: "bg-gradient-to-br from-blue-500/20 to-cyan-600/10" },
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-600 via-amber-500 to-orange-400 flex items-center justify-center shadow-2xl shadow-yellow-500/40">
              <Trophy size={32} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Creator Dashboard
              </h1>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                Manage Your Contests & Review Submissions
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  stat.change.includes('+') 
                    ? 'bg-green-500/10 text-green-400' 
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

        {/* Create Contest Section */}
        <div className="mb-10 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Create New Contest</h3>
              <p className="text-gray-400 text-sm">Launch a new creative challenge for the community</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2.5 bg-gradient-to-r from-yellow-600 to-orange-500 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                <Plus size={18} />
                Create Contest
              </button>
              <button className="px-4 py-2.5 border border-gray-700 text-gray-300 rounded-xl hover:border-yellow-500 hover:text-white transition-all flex items-center gap-2">
                <Settings size={18} />
                Template
              </button>
            </div>
          </div>
        </div>

        {/* My Contests Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Trophy size={28} className="text-yellow-400" />
                My Contests
              </h2>
              <p className="text-gray-400">Manage and track your created contests</p>
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
                  className="pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 w-full md:w-64"
                />
              </div>
              {/* Filter */}
              <div className="relative">
                <select
                  value={contestFilter}
                  onChange={(e) => setContestFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="draft">Draft</option>
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
                    <th className="p-4 text-left">Contest Name</th>
                    <th className="p-4 text-left">Type</th>
                    <th className="p-4 text-left">Participants</th>
                    <th className="p-4 text-left">Prize</th>
                    <th className="p-4 text-left">Deadline</th>
                    <th className="p-4 text-left">Submissions</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContests.map((contest) => (
                    <tr key={contest.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="font-semibold">{contest.name}</p>
                          <p className="text-sm text-gray-400">Created: {contest.created}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                          {contest.type}
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
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-purple-400" />
                          <span>{contest.submissions}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          contest.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : contest.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : contest.status === 'Completed'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {contest.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {contest.status === 'Pending' && (
                            <>
                              <button
                                onClick={() => handleContestAction(contest.id, 'Edit')}
                                className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors flex items-center gap-1"
                              >
                                <Edit size={14} />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => handleContestAction(contest.id, 'Delete')}
                                className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors flex items-center gap-1"
                              >
                                <Trash2 size={14} />
                                <span>Delete</span>
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => handleContestAction(contest.id, 'See Submissions')}
                            className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors flex items-center gap-1"
                          >
                            <Eye size={14} />
                            <span>View</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-800 text-center text-gray-400 text-sm">
              Showing {filteredContests.length} of {myContests.length} contests
            </div>
          </div>
        </div>

        {/* Submissions Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Users size={28} className="text-purple-400" />
                Submissions
              </h2>
              <p className="text-gray-400">Review and manage contest submissions</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search submissions..."
                  value={submissionSearch}
                  onChange={(e) => setSubmissionSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 w-full md:w-64"
                />
              </div>
              {/* Filter */}
              <div className="relative">
                <select
                  value={submissionFilter}
                  onChange={(e) => setSubmissionFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="winner">Winner</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>
          </div>

          {/* Submissions Table */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <tr>
                    <th className="p-4 text-left">Participant</th>
                    <th className="p-4 text-left">Contest</th>
                    <th className="p-4 text-left">Task Info</th>
                    <th className="p-4 text-left">Submitted</th>
                    <th className="p-4 text-left">Rating</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((sub) => (
                    <tr key={sub.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold">
                            {sub.avatar}
                          </div>
                          <div>
                            <p className="font-semibold">{sub.participant}</p>
                            <p className="text-sm text-gray-400">{sub.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-300">{sub.contest}</span>
                      </td>
                      <td className="p-4">
                        <p className="text-sm text-gray-400 truncate max-w-xs">{sub.taskInfo}</p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-sm">{sub.submitted}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Star size={14} className="text-yellow-400" />
                          <span>{sub.rating}/5.0</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          sub.status === 'Winner' 
                            ? 'bg-green-500/20 text-green-400' 
                            : sub.status === 'Reviewed'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {sub.status !== 'Winner' && (
                            <button
                              onClick={() => handleDeclareWinner(sub.id)}
                              className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1"
                            >
                              <Award size={14} />
                              <span>Declare Winner</span>
                            </button>
                          )}
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
              Showing {filteredSubmissions.length} of {submissions.length} submissions
            </div>
          </div>
        </div>

        {/* Create Contest Form */}
        <div className="mb-12 p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Plus size={28} className="text-yellow-400" />
            Create New Contest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Contest Name</label>
                <input 
                  type="text" 
                  placeholder="Enter contest name" 
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Contest Image</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-900/50 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center hover:border-yellow-500 transition-colors cursor-pointer">
                    <ImageIcon size={24} className="text-gray-500" />
                  </div>
                  <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <Upload size={16} />
                    Upload Image
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea 
                  placeholder="Describe your contest" 
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                  <input 
                    type="number" 
                    placeholder="$0.00" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Prize Money</label>
                  <input 
                    type="number" 
                    placeholder="$0.00" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Task Instructions</label>
                <textarea 
                  placeholder="Provide detailed task instructions" 
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Contest Type</label>
                  <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30">
                    <option value="">Select Type</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="writing">Writing</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Deadline</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end gap-4">
            <button className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-gray-600 hover:text-white transition-all">
              Save as Draft
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-500 text-white rounded-xl hover:opacity-90 transition-opacity">
              Publish Contest
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-10 p-8 bg-gradient-to-r from-yellow-900/20 via-orange-900/20 to-red-900/20 border border-yellow-800/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Creator Guidelines</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Create engaging contests, provide clear instructions, and review submissions fairly to 
            maintain a positive experience for all participants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-900/50 rounded-xl">
              <FileText size={24} className="text-green-400 mb-2 mx-auto" />
              <p className="text-sm">Provide detailed task instructions for clarity</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl">
              <Clock size={24} className="text-blue-400 mb-2 mx-auto" />
              <p className="text-sm">Set realistic deadlines for submissions</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-xl">
              <Award size={24} className="text-purple-400 mb-2 mx-auto" />
              <p className="text-sm">Review and declare winners promptly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeDashboard;