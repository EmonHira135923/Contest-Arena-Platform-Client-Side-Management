// Banner.jsx - Redesigned Home Page Banner
import { Search, Trophy, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [searchType, setSearchType] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchType.trim()) return;
    navigate(`/all-contest?type=${searchType}`);
  };

  const popularCategories = [
    { name: "Image Design", icon: "🎨" },
    { name: "Article Writing", icon: "✍️" },
    { name: "Business Idea", icon: "💡" },
    { name: "Gaming Review", icon: "🎮" },
    { name: "Video Making", icon: "🎥" },
    { name: "Coding Challenge", icon: "💻" }
  ];

  const stats = [
    { value: "500K+", label: "Total Prizes", icon: <Trophy className="w-5 h-5" />, color: "text-yellow-400" },
    { value: "50K+", label: "Active Creators", icon: <Users className="w-5 h-5" />, color: "text-purple-400" },
    { value: "2K+", label: "Live Contests", icon: <Sparkles className="w-5 h-5" />, color: "text-pink-400" },
    { value: "95%", label: "Success Rate", icon: <Award className="w-5 h-5" />, color: "text-green-400" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 px-4 pt-32 pb-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      {/* Main Content - Search First */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        
        {/* Search Section - At the top */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 backdrop-blur-sm mb-4"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Discover Amazing Contests</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Find Your
              </span>
              <br />
              <span className="text-white">Perfect Challenge</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Search through thousands of contests and find the perfect match for your skills
            </p>
          </div>

          {/* Main Search Box */}
          <div className="relative max-w-3xl mx-auto">
            <form onSubmit={handleSearch}>
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors z-10" size={22} />
                <input
                  type="text"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  placeholder="What type of contest are you looking for? (e.g., Image Design, Coding Challenge, etc.)"
                  className="w-full pl-16 pr-40 py-5 bg-gray-900/60 backdrop-blur-lg border-2 border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all text-lg shadow-2xl"
                  list="categories"
                />
                <datalist id="categories">
                  {popularCategories.map((cat, idx) => (
                    <option key={idx} value={cat.name} />
                  ))}
                </datalist>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center gap-2 group"
                >
                  Search
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>

            {/* Quick Search Categories */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              <span className="text-gray-400 text-sm">Popular:</span>
              {popularCategories.map((category, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchType(category.name);
                    navigate(`/all-contest?type=${category.name}`);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/40 hover:bg-gray-700/60 text-gray-300 rounded-lg transition-all backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 group"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats and Content - Below Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Join <span className="text-purple-400">ContestHub?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                We're not just another contest platform. We're a community where creativity meets opportunity, 
                and talent gets the recognition it deserves.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Guaranteed Prizes</h4>
                    <p className="text-gray-400 text-sm">Every contest has verified prize money that's paid out immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Global Community</h4>
                    <p className="text-gray-400 text-sm">Connect with creators from 100+ countries and build your network</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Career Opportunities</h4>
                    <p className="text-gray-400 text-sm">Top performers get recruitment offers from leading companies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/whyjoincontest")}
                className="px-8 py-3 border-2 border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white rounded-xl font-semibold hover:bg-gray-800/30 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all group hover:scale-105"
              >
                <div className={`${stat.color} mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 left-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-20 right-10 hidden lg:block"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl border border-blue-500/20 flex items-center justify-center">
            <Award className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-gray-500 text-sm flex flex-col items-center">
          <span className="mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;