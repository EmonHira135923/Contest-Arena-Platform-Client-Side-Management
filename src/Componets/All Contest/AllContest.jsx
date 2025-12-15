// AllContest.jsx - Updated to match dark theme
import { useSearchParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { Search, Trophy, Users, Calendar, Code, Palette, Brain, GamepadIcon, Briefcase, Filter, X } from "lucide-react";
import { motion } from "framer-motion";

const AllContest = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const type = params.get("type");
  const [searchTerm, setSearchTerm] = useState(type || "");
  const [activeFilter, setActiveFilter] = useState(type || "all");

  // Popular contest types with icons matching your theme
  const contestTypes = [
    { id: "all", label: "All Contests", icon: <Trophy className="w-5 h-5" />, color: "from-purple-600 to-pink-600" },
    { id: "coding", label: "Coding", icon: <Code className="w-5 h-5" />, color: "from-blue-600 to-cyan-600" },
    { id: "design", label: "Design", icon: <Palette className="w-5 h-5" />, color: "from-pink-600 to-rose-600" },
    { id: "ai", label: "AI & ML", icon: <Brain className="w-5 h-5" />, color: "from-purple-600 to-violet-600" },
    { id: "gaming", label: "Gaming", icon: <GamepadIcon className="w-5 h-5" />, color: "from-green-600 to-emerald-600" },
    { id: "business", label: "Business", icon: <Briefcase className="w-5 h-5" />, color: "from-orange-600 to-amber-600" },
  ];

  // Fetch contests
  const { data: contests = [], isLoading, error, refetch } = useQuery({
    queryKey: ["contests", type],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/contest${type ? `?type=${type}` : ''}`
        );
        return res.data;
      } catch (error) {
        console.error("Error fetching contests:", error);
        throw error;
      }
    },
  });

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      params.set("type", searchTerm);
      setParams(params);
      setActiveFilter(searchTerm);
    }
  };

  // Handle filter click
  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    if (filterType === "all") {
      params.delete("type");
      setSearchTerm("");
    } else {
      params.set("type", filterType);
      setSearchTerm(filterType);
    }
    setParams(params);
  };

  // Update search term when URL changes
  useEffect(() => {
    if (type) {
      setSearchTerm(type);
      setActiveFilter(type);
    } else {
      setSearchTerm("");
      setActiveFilter("all");
    }
  }, [type]);

  // Clear all filters
  const clearFilters = () => {
    params.delete("type");
    setParams(params);
    setSearchTerm("");
    setActiveFilter("all");
  };

  // Contest stats
  const totalContests = contests.length;
  const totalParticipants = contests.reduce((sum, contest) => sum + (contest.participants || 0), 0);
  const totalPrizeMoney = contests.reduce((sum, contest) => sum + (parseInt(contest.prize) || 0), 0);

  if (isLoading) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="container mx-auto px-4 pt-32">
        <div className="text-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"></div>
          <p className="text-xl text-gray-400">Loading contests...</p>
        </div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="container mx-auto px-4 pt-32">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <div className="text-6xl">😔</div>
          <h3 className="text-2xl font-bold text-red-400">Error loading contests</h3>
          <p className="text-gray-400">There was a problem fetching the contests. Please try again.</p>
          <button 
            onClick={() => refetch()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      
      {/* Hero Banner Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 mb-6">
              <Filter className="w-4 h-4 text-purple-400" />
              <span className="text-sm">Explore Contests</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                All Contests
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover and participate in exciting creative competitions
            </p>
          </motion.div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" size={22} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search contests by type, name, or keyword..."
                  className="w-full pl-16 pr-40 py-4 bg-gray-900/60 backdrop-blur-lg border-2 border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-lg shadow-xl"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-2.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Filters */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4 text-center">Browse by category:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {contestTypes.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFilterClick(item.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                      activeFilter === item.id
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-800'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{totalContests}</div>
                <div className="text-gray-400">Active Contests</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">{totalParticipants.toLocaleString()}</div>
                <div className="text-gray-400">Total Participants</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">${totalPrizeMoney.toLocaleString()}+</div>
                <div className="text-gray-400">Total Prize Money</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contests Grid Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Header */}
          {type && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Showing results for: <span className="text-purple-400">"{type}"</span>
                  </h2>
                  <p className="text-gray-400">
                    {contests.length} contest{contests.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg transition-colors border border-gray-700 hover:border-purple-500/50"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Contests Grid */}
          {contests.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contests.map((contest, index) => (
                <motion.div
                  key={contest._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
                >
                  {/* Contest Header */}
                  <div className={`h-48 ${getGradientByType(contest.contestType)} relative`}>
                    <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                      <span className="text-sm font-semibold text-white capitalize">
                        {contest.contestType}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{contest.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-400" />
                          <span>${contest.prize || "TBA"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span>{contest.participants || 0} joined</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contest Details */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {contest.description || "Join this exciting competition and showcase your skills!"}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{contest.deadline ? new Date(contest.deadline).toLocaleDateString() : "Open deadline"}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/contests/${contest._id}`)}
                        className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all group-hover:scale-105"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 max-w-2xl mx-auto"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold mb-4">No contests found</h3>
              <p className="text-gray-400 mb-8">
                {type 
                  ? `We couldn't find any contests matching "${type}"`
                  : "There are currently no contests available"
                }
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={clearFilters}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Browse All Contests
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="px-8 py-3 border-2 border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white rounded-xl font-semibold hover:bg-gray-800/30 transition-all"
                >
                  Return Home
                </button>
              </div>
            </motion.div>
          )}

          {/* Pagination (for future implementation) */}
          {contests.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors disabled:opacity-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors">
                  Next
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 border border-purple-800/30">
            <h3 className="text-3xl font-bold mb-4">Ready to create your own contest?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our creator community and launch your own competition
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-10 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              Become a Creator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function for contest type gradients (updated for dark theme)
const getGradientByType = (type) => {
  const gradients = {
    coding: "bg-gradient-to-br from-blue-600/40 to-cyan-600/40",
    design: "bg-gradient-to-br from-pink-600/40 to-rose-600/40",
    gaming: "bg-gradient-to-br from-green-600/40 to-emerald-600/40",
    ai: "bg-gradient-to-br from-purple-600/40 to-violet-600/40",
    business: "bg-gradient-to-br from-orange-600/40 to-amber-600/40",
    default: "bg-gradient-to-br from-gray-700/40 to-gray-800/40",
  };
  
  const key = type?.toLowerCase() || 'default';
  return gradients[key] || gradients.default;
};

export default AllContest;