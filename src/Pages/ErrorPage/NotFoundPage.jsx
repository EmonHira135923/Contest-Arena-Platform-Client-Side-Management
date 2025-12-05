import React from "react";
import { Link } from "react-router";
import {
  Compass,
  Home,
  Search,
  Ghost,
  ArrowLeft,
  Trophy,
  Rocket,
} from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-purple-500/30 animate-pulse">
                <Compass size={30} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Creative Arena
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Where Creativity Meets Competition
                </p>
              </div>
            </Link>
          </div>

          {/* Main 404 Content */}
          <div className="text-center">
            {/* Animated Number */}
            <div className="relative mb-8">
              <div className="text-[200px] md:text-[280px] font-bold bg-gradient-to-b from-purple-600/30 to-transparent bg-clip-text text-transparent">
                404
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Ghost
                  size={120}
                  className="text-purple-500/20 animate-float"
                />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-2xl"></div>
            </div>

            {/* Message */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Oops! Contest Not Found
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-2 max-w-2xl mx-auto">
                The creative competition you're looking for has either ended or
                doesn't exist yet.
              </p>
              <p className="text-gray-500">
                But don't worry! There are plenty of exciting contests waiting
                for you.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link
                to="/"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <Home size={22} />
                <span>Back to Home</span>
                <ArrowLeft
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/all-contest"
                className="group flex items-center gap-3 px-8 py-4 border-2 border-purple-500/30 text-purple-300 rounded-xl font-medium hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Trophy size={22} />
                <span>Explore All Contests</span>
                <Rocket
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Search Section */}
            <div className="mb-16 max-w-2xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                  <Search size={22} />
                  <span>Search for Contests</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Can't find what you're looking for? Try searching across all
                  categories:
                </p>
                <div className="flex gap-4">
                  {[
                    "Design",
                    "Photography",
                    "Writing",
                    "Coding",
                    "Music",
                    "Art",
                  ].map((category) => (
                    <Link
                      key={category}
                      to={`/all-contest?category=${category.toLowerCase()}`}
                      className="px-4 py-2 bg-gray-800 hover:bg-purple-900/30 border border-gray-700 hover:border-purple-500 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Popular Contests */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                <Trophy className="text-yellow-500" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Trending Contests
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Digital Art Challenge",
                    participants: "2.5K",
                    prize: "$5,000",
                  },
                  {
                    name: "UI/UX Design Sprint",
                    participants: "1.8K",
                    prize: "$3,000",
                  },
                  {
                    name: "Creative Writing Fest",
                    participants: "3.2K",
                    prize: "$4,500",
                  },
                ].map((contest, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {contest.name}
                      </h4>
                      <div className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded">
                        LIVE
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <span>👥 {contest.participants}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">🏆</span>
                        <span>{contest.prize}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-500 mb-4">
                Still can't find what you're looking for?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors border-b border-dashed border-purple-500/30 hover:border-purple-400 pb-1"
              >
                Contact our support team
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
