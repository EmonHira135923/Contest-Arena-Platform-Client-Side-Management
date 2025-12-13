import React, { useState } from "react";
import { Link } from "react-router";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Code,
  Github,
  Globe,
  Sparkles,
  Shield,
  Key,
  UserCheck,
  Trophy,
  Users,
  Zap,
  Star,
  Target,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";
import useHooks from "../../../Context/useHooks";

const LoginForm = () => {
 const { loginUser, googleLogin, loading } = useHooks();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // loading
  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Loading...
    </div>
  );
}


  // handle login
  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await loginUser(email, password);
    alert("Login successful");
  } catch (err) {
    alert(err.message);
  }
};


  const stats = [
    {
      value: "50K+",
      label: "Active Creators",
      icon: <Users size={20} />,
      color: "text-purple-400",
    },
    {
      value: "$500K+",
      label: "Total Prizes",
      icon: <Trophy size={20} />,
      color: "text-yellow-400",
    },
    {
      value: "2K+",
      label: "Contests",
      icon: <Target size={20} />,
      color: "text-blue-400",
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <TrendingUp size={20} />,
      color: "text-emerald-400",
    },
  ];

  const activeContests = [
    {
      name: "CodeFest 2024",
      participants: "2,845",
      prize: "$10K",
      time: "2d left",
    },
    {
      name: "UI Design Battle",
      participants: "1,562",
      prize: "$5K",
      time: "1d left",
    },
    {
      name: "AI Hackathon",
      participants: "3,421",
      prize: "$15K",
      time: "3d left",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-auto p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-purple-500/40">
              <Code size={28} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Creative Arena
              </h1>
              <p className="text-gray-400 text-sm">
                Welcome Back! Continue your journey
              </p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Side - Brand & Features */}
          <div className="flex flex-col space-y-6">
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm h-full">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`p-1.5 rounded-lg bg-gray-900/50 ${stat.color}`}
                      >
                        {stat.icon}
                      </div>
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                ))}
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

                {activeContests.map((contest, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-r from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <h4 className="font-semibold text-sm truncate">
                          {contest.name}
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
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-950/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-black/50 lg:sticky lg:top-8 lg:self-start">
            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 mb-4 shadow-xl shadow-purple-500/30">
                <Lock size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Sign in to access your dashboard
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-300 transition-colors">
                  <Mail size={16} className="text-purple-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all group-hover:border-purple-500/50"
                  placeholder="you@example.com"
                   onChange={(e) => setEmail(e.target.value)}
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
                    name="password"
                    autoComplete="new-password"
                    required
                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all pr-12 group-hover:border-purple-500/50"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}

                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-purple-500 focus:ring-purple-500 focus:ring-2 cursor-pointer appearance-none checked:border-purple-500 checked:bg-purple-900/30"
                    />
                    {rememberMe && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-300 group-hover:text-gray-200 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Sign In to Dashboard</span>
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
                  <span onClick={googleLogin} className="text-sm font-medium">Google</span>
                </button>
              </div>

              {/* Register Link */}
              <div className="text-center pt-6 border-t border-gray-800/50">
                <p className="text-gray-400">
                  New to Creative Arena?{" "}
                  <Link
                    to="/register"
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors hover:underline inline-flex items-center gap-1"
                  >
                    Create Account
                    <ArrowRight size={14} />
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
