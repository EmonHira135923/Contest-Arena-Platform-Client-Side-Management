import React, { useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  Calendar, 
  Award, 
  Users, 
  BarChart3, 
  Bell, 
  Star, 
  Zap, 
  Target,
  Clock,
  TrendingDown,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const Aside = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const upcomingContests = [
    { id: 1, name: "Design Challenge", time: "Starts in 2h", prize: "$1,500", participants: 245 },
    { id: 2, name: "Code Marathon", time: "Starts in 6h", prize: "$2,000", participants: 180 },
    { id: 3, name: "Photo Contest", time: "Starts tomorrow", prize: "$800", participants: 95 },
  ];

  const topCreators = [
    { id: 1, name: "Alex Johnson", wins: 12, points: 2450 },
    { id: 2, name: "Sarah Chen", wins: 9, points: 1980 },
    { id: 3, name: "Mike Wilson", wins: 7, points: 1650 },
  ];

  const stats = [
    { label: "Live Contests", value: "15", change: "+2", icon: <Zap size={16} className="text-yellow-400" /> },
    { label: "Total Participants", value: "2.4K", change: "+12%", icon: <Users size={16} className="text-blue-400" /> },
    { label: "Avg. Prize", value: "$850", change: "+5%", icon: <Award size={16} className="text-purple-400" /> },
  ];

  return (
    <aside className={`bg-gradient-to-b from-gray-900/80 to-gray-950/80 border-r border-gray-800 h-full transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-80'}`}>
      {/* Toggle Button */}
      <div className="p-4 border-b border-gray-800 flex justify-end">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Stats Section */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-800">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BarChart3 size={20} className="text-purple-400" />
            Platform Stats
          </h3>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-900/50">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Contests */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Calendar size={20} className="text-blue-400" />
              Upcoming
            </h3>
            <span className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded-full">
              Soon
            </span>
          </div>
          <div className="space-y-3">
            {upcomingContests.map((contest) => (
              <div key={contest.id} className="group p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 border border-gray-800 hover:border-purple-500/30 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-purple-300 transition-colors">
                      {contest.name}
                    </h4>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <Clock size={12} />
                      {contest.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-yellow-400">{contest.prize}</p>
                    <p className="text-xs text-gray-400">{contest.participants} joined</p>
                  </div>
                </div>
                <button className="w-full mt-2 py-2 text-xs bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-lg border border-purple-500/30 hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Creators */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Trophy size={20} className="text-yellow-400" />
              Top Creators
            </h3>
            <TrendingUp size={18} className="text-green-400" />
          </div>
          <div className="space-y-3">
            {topCreators.map((creator, index) => (
              <div key={creator.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold">
                      {creator.name.charAt(0)}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{creator.name}</h4>
                    <p className="text-xs text-gray-400">{creator.wins} wins</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-yellow-400">{creator.points}</p>
                  <p className="text-xs text-gray-400">points</p>
                </div>
              </div>
            ))}
          </div>
          {!isCollapsed && (
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/30 text-gray-300 rounded-lg border border-gray-700 hover:border-purple-500/50 hover:text-white transition-all flex items-center justify-center gap-2">
              <Target size={16} />
              View Leaderboard
            </button>
          )}
        </div>
      )}

      {/* Collapsed View */}
      {isCollapsed && (
        <div className="p-4 space-y-6">
          {/* Stats Icons */}
          <div className="space-y-4">
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer group">
              <Zap size={20} className="text-yellow-400 mb-1" />
              <span className="text-xs text-gray-400">Live</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer group">
              <Calendar size={20} className="text-blue-400 mb-1" />
              <span className="text-xs text-gray-400">Upcoming</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer group">
              <Trophy size={20} className="text-yellow-400 mb-1" />
              <span className="text-xs text-gray-400">Top</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative">
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors cursor-pointer group">
              <Bell size={20} className="text-purple-400 mb-1" />
              <span className="text-xs text-gray-400">Alerts</span>
            </div>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Aside;