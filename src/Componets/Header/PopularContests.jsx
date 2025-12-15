// PopularContests.jsx
import { Trophy, Users, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const PopularContests = () => {
  const navigate = useNavigate();

  // Fetch popular contests (sorted by participants)
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["popular-contests"],
    queryFn: async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/contests`);
        // Sort by participants count and take top 5
        return res.data
          .sort((a, b) => (b.participants || 0) - (a.participants || 0))
          .slice(0, 5);
      } catch (error) {
        console.error("Error fetching popular contests:", error);
        return [];
      }
    },
  });

  const handleViewDetails = (contestId, isLoggedIn) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate(`/contests/${contestId}`);
    }
  };

  // Mock user authentication - replace with actual auth check
  const isLoggedIn = false; // Change this based on your auth state

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 mb-4">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Trending Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Most <span className="text-purple-400">Popular</span> Contests
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of participants in these trending competitions
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-400">Loading popular contests...</p>
          </div>
        ) : (
          <>
            {/* Contests Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
              {contests.map((contest, index) => (
                <motion.div
                  key={contest._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
                >
                  {/* Contest Image/Header */}
                  <div className={`h-40 ${getGradientByType(contest.contestType)} relative`}>
                    <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700">
                      <span className="text-xs font-semibold text-white capitalize">
                        {contest.contestType || "Contest"}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white line-clamp-1">{contest.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-sm text-white/80">
                          <Users className="w-3 h-3" />
                          <span>{contest.participants || 0} joined</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contest Details */}
                  <div className="p-5">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {contest.description 
                        ? (contest.description.length > 100 
                            ? contest.description.slice(0, 100) + "..." 
                            : contest.description)
                        : "Join this exciting competition and showcase your skills!"}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{contest.deadline ? new Date(contest.deadline).toLocaleDateString() : "Open"}</span>
                      </div>
                      <button
                        onClick={() => handleViewDetails(contest._id, isLoggedIn)}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all group-hover:scale-105"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show All Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/all-contest")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all flex items-center gap-2 mx-auto"
              >
                Show All Contests
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Helper function for contest type gradients
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

export default PopularContests;