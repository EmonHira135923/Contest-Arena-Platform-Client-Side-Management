// WinnerSection.jsx
import { Trophy, Award, DollarSign, Users, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const WinnerSection = () => {
  const navigate = useNavigate();

  const winners = [
    {
      name: "Sarah Johnson",
      prize: "$10,000",
      contest: "UI/UX Design Challenge",
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d1?w=400&h=400&fit=crop&crop=face",
      category: "Design",
      date: "Jan 2024",
    },
    {
      name: "Alex Chen",
      prize: "$7,500",
      contest: "AI Innovation Contest",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      category: "AI & ML",
      date: "Dec 2023",
    },
    {
      name: "Maria Rodriguez",
      prize: "$5,000",
      contest: "Business Plan Competition",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      category: "Business",
      date: "Nov 2023",
    },
    {
      name: "David Kim",
      prize: "$8,000",
      contest: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      category: "Coding",
      date: "Oct 2023",
    },
  ];

  const stats = [
    { value: "500+", label: "Total Winners", icon: <Trophy className="w-6 h-6" />, color: "text-yellow-400" },
    { value: "$2M+", label: "Prize Money Distributed", icon: <DollarSign className="w-6 h-6" />, color: "text-green-400" },
    { value: "50+", label: "Countries Represented", icon: <Users className="w-6 h-6" />, color: "text-blue-400" },
    { value: "95%", label: "Success Rate", icon: <Star className="w-6 h-6" />, color: "text-pink-400" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-yellow-400">Winners</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how ordinary creators achieved extraordinary success through our platform
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all"
            >
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Winners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all"
            >
              {/* Winner Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {winner.category}
                  </div>
                </div>
              </div>

              {/* Winner Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{winner.name}</h3>
                    <p className="text-gray-400 text-sm">{winner.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-400">{winner.prize}</div>
                    <p className="text-gray-400 text-xs">Prize Won</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-2">{winner.contest}</p>
                
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Grand Prize Winner</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-purple-400">Your Success</span> Could Be Next
            </h3>
            <p className="text-gray-400">
              Join thousands of creators who transformed their passion into prizes. 
              Your next big win is just one contest away.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/all-contest")}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-xl font-semibold hover:shadow-xl hover:shadow-yellow-500/30 transition-all"
            >
              Join a Contest
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/whyjoincontest")}
              className="px-8 py-3 border-2 border-gray-700 hover:border-yellow-500 text-gray-300 hover:text-white rounded-xl font-semibold hover:bg-gray-800/30 transition-all"
            >
              View Success Stories
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnerSection;