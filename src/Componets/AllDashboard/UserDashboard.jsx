import React, { useState } from 'react';
import { 
  User, 
  Trophy, 
  Target, 
  DollarSign, 
  Calendar, 
  Award, 
  TrendingUp, 
  Edit, 
  Upload, 
  CheckCircle, 
  XCircle, 
  Clock,
  BarChart,
  Star,
  Users,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

const UserDashboard = () => {
  // Dummy data
  const participatedContests = [
    { 
      id: 1, 
      name: 'UI Design Challenge', 
      paymentStatus: 'Paid', 
      deadline: '2024-03-25',
      status: 'Active',
      category: 'Design',
      prize: '$1,500',
      progress: 65
    },
    { 
      id: 2, 
      name: 'Logo Creation Contest', 
      paymentStatus: 'Pending', 
      deadline: '2024-03-28',
      status: 'Submitted',
      category: 'Branding',
      prize: '$800',
      progress: 100
    },
    { 
      id: 3, 
      name: 'Web App Interface', 
      paymentStatus: 'Paid', 
      deadline: '2024-03-20',
      status: 'Completed',
      category: 'UI/UX',
      prize: '$3,000',
      progress: 100
    },
    { 
      id: 4, 
      name: 'Mobile App Design', 
      paymentStatus: 'Paid', 
      deadline: '2024-04-01',
      status: 'In Progress',
      category: 'Mobile',
      prize: '$2,500',
      progress: 40
    },
  ];

  const winningContests = [
    { 
      id: 1, 
      name: 'Brand Identity Design', 
      prize: 500, 
      date: '2024-02-15',
      category: 'Branding',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'AI Interface Challenge', 
      prize: 1000, 
      date: '2024-01-30',
      category: 'AI/ML',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Photo Editing Contest', 
      prize: 300, 
      date: '2024-03-05',
      category: 'Photography',
      rating: 4.7
    },
  ];

  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    address: '123 Creative Street, San Francisco, CA',
    participated: 10,
    won: 4,
    email: 'john.doe@example.com',
    memberSince: '2023-08-15',
    skills: ['UI/UX Design', 'Logo Design', 'Web Development'],
    level: 'Intermediate'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...userProfile });

  // Calculate win percentage
  const winPercentage = userProfile.participated
    ? Math.round((userProfile.won / userProfile.participated) * 100)
    : 0;

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setUserProfile(editedProfile);
    setIsEditing(false);
    console.log('Profile updated');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({ ...prev, [name]: value }));
  };

  // Stats data
  const stats = [
    { label: "Contests Joined", value: userProfile.participated, change: "+2", icon: <Target className="text-purple-400" />, color: "bg-gradient-to-br from-purple-500/20 to-purple-600/10" },
    { label: "Contests Won", value: userProfile.won, change: "+1", icon: <Trophy className="text-yellow-400" />, color: "bg-gradient-to-br from-yellow-500/20 to-amber-600/10" },
    { label: "Win Rate", value: `${winPercentage}%`, change: "+5%", icon: <TrendingUp className="text-green-400" />, color: "bg-gradient-to-br from-green-500/20 to-emerald-600/10" },
    { label: "Total Earnings", value: "$1,800", change: "+$300", icon: <DollarSign className="text-blue-400" />, color: "bg-gradient-to-br from-blue-500/20 to-cyan-600/10" },
  ];

  // Quick actions
  const quickActions = [
    { label: "Find Contests", icon: <Target size={20} />, color: "from-purple-500 to-pink-500" },
    { label: "My Submissions", icon: <Upload size={20} />, color: "from-blue-500 to-cyan-500" },
    { label: "Payment History", icon: <DollarSign size={20} />, color: "from-green-500 to-emerald-500" },
    { label: "Settings", icon: <Settings size={20} />, color: "from-orange-500 to-red-500" },
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              User Dashboard
            </h1>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Track your contests, submissions, and achievements
            </p>
          </div>
          <button className="px-4 py-2.5 border border-gray-700 text-gray-300 rounded-xl hover:border-purple-500 hover:text-white transition-all flex items-center gap-2">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        {/* Profile Card */}
        <div className="mb-10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-purple-500/30">
                <img 
                  src={userProfile.photo} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold">{userProfile.name}</h2>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                      {userProfile.level}
                    </span>
                  </div>
                  <p className="text-gray-400 flex items-center gap-2">
                    <User size={16} />
                    {userProfile.email}
                  </p>
                </div>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 mt-4 md:mt-0"
                >
                  <Edit size={18} />
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-gray-900/50 rounded-xl">
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="font-semibold">{userProfile.memberSince}</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">San Francisco, CA</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl">
                  <p className="text-sm text-gray-400">Skill Points</p>
                  <p className="font-semibold">1,245</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl">
                  <p className="text-sm text-gray-400">Avg. Rating</p>
                  <p className="font-semibold flex items-center gap-1">
                    4.7 <Star size={16} className="text-yellow-400" />
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {quickActions.map((action, index) => (
            <button 
              key={index}
              className={`bg-gradient-to-r ${action.color} text-white p-4 rounded-2xl hover:opacity-90 transition-opacity flex flex-col items-center gap-3`}
            >
              <div className="p-2 bg-white/20 rounded-lg">
                {action.icon}
              </div>
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Participated Contests */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Target size={28} className="text-purple-400" />
                My Participated Contests
              </h2>
              <p className="text-gray-400">Track your ongoing and completed contests</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <tr>
                    <th className="p-4 text-left">Contest</th>
                    <th className="p-4 text-left">Category</th>
                    <th className="p-4 text-left">Payment</th>
                    <th className="p-4 text-left">Deadline</th>
                    <th className="p-4 text-left">Prize</th>
                    <th className="p-4 text-left">Progress</th>
                    <th className="p-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {participatedContests
                    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                    .map(contest => (
                      <tr key={contest.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                        <td className="p-4">
                          <p className="font-semibold">{contest.name}</p>
                          <p className="text-sm text-gray-400">ID: #{contest.id}</p>
                        </td>
                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                            {contest.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {contest.paymentStatus === 'Paid' ? (
                              <CheckCircle size={16} className="text-green-400" />
                            ) : (
                              <Clock size={16} className="text-yellow-400" />
                            )}
                            <span className={contest.paymentStatus === 'Paid' ? 'text-green-400' : 'text-yellow-400'}>
                              {contest.paymentStatus}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-gray-400" />
                            <span>{contest.deadline}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <DollarSign size={14} className="text-yellow-400" />
                            <span className="font-semibold">{contest.prize}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="w-32">
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                style={{ width: `${contest.progress}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">{contest.progress}% Complete</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            contest.status === 'Active' 
                              ? 'bg-green-500/20 text-green-400' 
                              : contest.status === 'Completed'
                              ? 'bg-blue-500/20 text-blue-400'
                              : contest.status === 'Submitted'
                              ? 'bg-purple-500/20 text-purple-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {contest.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Winning Contests */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Trophy size={28} className="text-yellow-400" />
                My Winning Contests
              </h2>
              <p className="text-gray-400">Your successful contest entries and prizes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winningContests.map(contest => (
              <div key={contest.id} className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{contest.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                      {contest.category}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-amber-500/30 transition-all">
                    <Trophy className="text-yellow-400" size={24} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Prize Money</span>
                    <span className="text-2xl font-bold text-yellow-400">${contest.prize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Won On</span>
                    <span className="font-medium">{contest.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400" />
                      <span className="font-medium">{contest.rating}/5.0</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 px-4 py-2.5 border border-gray-700 text-gray-300 rounded-xl hover:border-yellow-500 hover:text-white transition-all flex items-center justify-center gap-2">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Update Form */}
        {isEditing && (
          <div className="mb-12 p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Edit size={28} className="text-purple-400" />
              Update Profile
            </h2>
            <form onSubmit={handleProfileUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={editedProfile.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={editedProfile.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Profile Photo</label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-900/50 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center hover:border-purple-500 transition-colors cursor-pointer">
                        <Upload size={24} className="text-gray-500" />
                      </div>
                      <button 
                        type="button"
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                      >
                        Upload Photo
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                    <textarea 
                      name="address"
                      value={editedProfile.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Skills</label>
                    <input 
                      type="text" 
                      placeholder="Add skills separated by commas"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                    <select 
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate" selected>Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-gray-600 hover:text-white transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Win Rate Chart Section */}
        <div className="mt-10 p-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 border border-purple-800/30 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Performance Overview</h3>
              <p className="text-gray-300 mb-2">
                Your win rate of <span className="font-bold text-green-400">{winPercentage}%</span> is above average!
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500/20 rounded"></div>
                  <span className="text-sm text-gray-400">Won: {userProfile.won}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500/20 rounded"></div>
                  <span className="text-sm text-gray-400">Participated: {userProfile.participated}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48">
                {/* Simplified chart visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">{winPercentage}%</div>
                    <div className="text-gray-400">Win Rate</div>
                  </div>
                </div>
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${winPercentage * 2.51} ${(100 - winPercentage) * 2.51}`}
                    strokeDashoffset="0"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;