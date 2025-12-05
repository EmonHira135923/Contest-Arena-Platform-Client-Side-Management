import React, { useState } from "react";
import { Link } from "react-router";
import {
  User,
  Mail,
  Lock,
  Camera,
  Trophy,
  Users,
  Award,
  Sparkles,
  Eye,
  EyeOff,
  ArrowRight,
  Code,
  Star,
  Shield,
  TrendingUp,
  Zap,
  Target,
  Globe,
  Github,
  Clock,
  FileImage,
  CheckCircle,
} from "lucide-react";

const RegForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-auto p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <Code size={28} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Creative Arena
              </h1>
              <p className="text-gray-400 text-sm">
                Join the Competition • Start Your Journey
              </p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Side - Contest Info */}
          <div className="flex flex-col space-y-6">
            {/* Contest Stats Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/40 to-pink-900/40">
                  <Trophy className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Join 50K+ Creators</h2>
                  <p className="text-gray-400 text-sm">
                    Currently competing worldwide
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-400">
                    $500K+
                  </div>
                  <p className="text-xs text-gray-400">Total Prizes</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-pink-400">2K+</div>
                  <p className="text-xs text-gray-400">Contests</p>
                </div>
              </div>

              {/* Active Contests */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Zap className="text-yellow-400" size={20} />
                    Live Contests
                  </h3>
                  <div className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full">
                    JOIN NOW
                  </div>
                </div>

                {[
                  {
                    title: "CodeFest 2024",
                    prize: "$10,000",
                    participants: "2,845",
                    time: "2d left",
                  },
                  {
                    title: "UI/UX Design Challenge",
                    prize: "$5,000",
                    participants: "1,562",
                    time: "1d left",
                  },
                  {
                    title: "AI Hackathon",
                    prize: "$15,000",
                    participants: "3,421",
                    time: "3d left",
                  },
                ].map((contest, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-r from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <h4 className="font-semibold text-sm truncate">
                          {contest.title}
                        </h4>
                      </div>
                      <div className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full flex items-center gap-1">
                        <Clock size={10} />
                        {contest.time}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-400">
                          {contest.participants} participants
                        </span>
                      </div>
                      <div className="text-sm font-bold text-yellow-400 flex items-center gap-1">
                        <Award size={12} />
                        {contest.prize}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-rose-900/5 border border-purple-800/30 rounded-2xl p-6 backdrop-blur-sm flex-1">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Star className="text-yellow-400" size={20} />
                Why Join Creative Arena?
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <TrendingUp size={16} />,
                    text: "Weekly coding challenges",
                    description: "Sharpen your skills regularly",
                    color: "text-green-400",
                  },
                  {
                    icon: <Award size={16} />,
                    text: "Professional recognition",
                    description: "Get noticed by top companies",
                    color: "text-yellow-400",
                  },
                  {
                    icon: <Users size={16} />,
                    text: "Global community",
                    description: "Connect with developers worldwide",
                    color: "text-blue-400",
                  },
                  {
                    icon: <Shield size={16} />,
                    text: "Secure platform",
                    description: "Your data is protected",
                    color: "text-emerald-400",
                  },
                  {
                    icon: <Sparkles size={16} />,
                    text: "Portfolio building",
                    description: "Showcase your best work",
                    color: "text-pink-400",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-900/30 to-transparent hover:from-gray-800/40 transition-all duration-300 group"
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 ${feature.color} group-hover:scale-110 transition-transform`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-200">
                        {feature.text}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                    <CheckCircle
                      size={14}
                      className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-950/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-black/50 lg:sticky lg:top-8 lg:self-start">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 mb-4 shadow-xl shadow-purple-500/30">
                <User size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Create Account
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Start your creative journey today
              </p>
            </div>

            <form className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-300 transition-colors">
                  <User size={16} className="text-purple-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all group-hover:border-purple-500/50"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-300 transition-colors">
                  <Mail size={16} className="text-purple-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all group-hover:border-purple-500/50"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-300 transition-colors">
                  <Lock size={16} className="text-purple-400" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all pr-12 group-hover:border-purple-500/50"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">
                  Minimum 8 characters with letters and numbers
                </p>
              </div>

              {/* Profile Photo Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-300 transition-colors">
                  <Camera size={16} className="text-purple-400" />
                  Profile Photo (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border-2 border-dashed border-gray-700 rounded-xl text-white transition-all group-hover:border-purple-500/50 cursor-pointer">
                    <div className="flex items-center justify-center gap-2">
                      <FileImage size={18} className="text-gray-400" />
                      <span className="text-sm">
                        {selectedFile
                          ? selectedFile.name
                          : "Click to upload or drag and drop"}
                      </span>
                    </div>
                    {selectedFile && (
                      <p className="text-xs text-emerald-400 text-center mt-2">
                        ✓ {selectedFile.name} selected
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-1">
                  Add a photo to personalize your profile
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-2 group cursor-pointer">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-purple-500 focus:ring-purple-500 focus:ring-2 cursor-pointer appearance-none checked:border-purple-500 checked:bg-purple-900/30"
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-300 group-hover:text-gray-200 cursor-pointer"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-purple-400 hover:text-purple-300 transition-colors hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-purple-400 hover:text-purple-300 transition-colors hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-rose-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Create Account</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-gradient-to-br from-gray-900/60 to-gray-950/30 text-gray-500 text-sm">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl flex items-center justify-center gap-2 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <Github
                    size={18}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
                <button
                  type="button"
                  className="py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl flex items-center justify-center gap-2 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <Globe
                    size={18}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm font-medium">Google</span>
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center pt-6 border-t border-gray-800/50">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors hover:underline inline-flex items-center gap-1"
                  >
                    Sign In
                    <ArrowRight size={14} />
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 pt-6 border-t border-gray-800/30">
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
