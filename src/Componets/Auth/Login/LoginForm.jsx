import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
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
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import useHooks from "../../../Context/useHooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { loginUser, googleLogin, loading } = useHooks();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Show loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle login with smart redirect
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    try {
      await loginUser(email, password);
      
      // Show success toast
      toast.success("🎉 Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });

      // Check for stored redirect path (from Navbar click)
      const storedRedirect = sessionStorage.getItem('redirectAfterLogin');
      
      // Check for redirect from ProtectedRoute
      const from = location.state?.from?.pathname || '/dashboard';
      
      // Prioritize stored redirect, then location state, then default to dashboard
      let redirectTo = '/dashboard';
      if (storedRedirect) {
        redirectTo = storedRedirect;
        sessionStorage.removeItem('redirectAfterLogin');
      } else if (from) {
        redirectTo = from;
      }

      // Add small delay for toast to show
      setTimeout(() => {
        navigate(redirectTo, { replace: true });
      }, 1000);

    } catch (err) {
      console.error("Login error:", err);
      setIsLoggingIn(false);
      
      let errorMessage = "Login failed. Please try again.";
      
      // More specific error messages
      if (err.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email.";
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = "Too many failed attempts. Please try again later.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Invalid email address format.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setLoginError(errorMessage);
      toast.error(`❌ ${errorMessage}`, {
        position: "top-right",
        autoClose: 4000,
      });
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      
      toast.success("🎉 Google login successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Check for stored redirect path
      const storedRedirect = sessionStorage.getItem('redirectAfterLogin');
      let redirectTo = storedRedirect || '/admin';
      
      if (storedRedirect) {
        sessionStorage.removeItem('redirectAfterLogin');
      }

      setTimeout(() => {
        navigate(redirectTo, { replace: true });
      }, 1000);

    } catch (err) {
      toast.error(`❌ Google login failed: ${err.message}`, {
        position: "top-right",
        autoClose: 4000,
      });
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
      category: "Coding",
    },
    {
      name: "UI Design Battle",
      participants: "1,562",
      prize: "$5K",
      time: "1d left",
      category: "Design",
    },
    {
      name: "AI Hackathon",
      participants: "3,421",
      prize: "$15K",
      time: "3d left",
      category: "AI/ML",
    },
  ];

  const features = [
    "Access to all contests",
    "Submit your creative work",
    "Win amazing prizes",
    "Connect with creators",
    "Track your progress",
    "Get recognized",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-auto p-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-2xl shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-shadow">
              <Code size={28} className="text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Creative Arena
              </h1>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
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
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
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

              {/* Features List */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="text-purple-400" size={20} />
                  What You Get
                </h3>
                <div className="space-y-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={16} className="text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Contests */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Zap className="text-yellow-400" size={20} />
                    Live Contests
                  </h3>
                  <div className="text-xs px-2 py-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-purple-300 rounded-full">
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
                        <span className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                          {contest.category}
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
                <Shield size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Sign in to access contests, submissions, and more
              </p>
            </div>

            {/* Error Message */}
            {loginError && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-800/30 rounded-xl flex items-start gap-3">
                <AlertCircle size={20} className="text-red-400 mt-0.5" />
                <div>
                  <p className="text-red-300 text-sm">{loginError}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Need help? <Link to="/contact" className="text-purple-400 hover:underline">Contact support</Link>
                  </p>
                </div>
              </div>
            )}

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all group-hover:border-purple-500/50"
                  placeholder="you@example.com"
                  disabled={isLoggingIn}
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
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all pr-12 group-hover:border-purple-500/50"
                    placeholder="••••••••"
                    disabled={isLoggingIn}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoggingIn}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-gray-500 ml-1">
                    Minimum 6 characters
                  </p>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 bg-gray-900 border-gray-700 rounded text-purple-500 focus:ring-purple-500 focus:ring-2 cursor-pointer appearance-none checked:border-purple-500 checked:bg-purple-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoggingIn}
                  />
                  {rememberMe && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                  )}
                </div>
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-300 group-hover:text-gray-200 cursor-pointer select-none"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isLoggingIn ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="relative z-10">Signing In...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Sign In to Dashboard</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
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
                  disabled={isLoggingIn}
                  onClick={() => {
                    // GitHub login placeholder
                    toast.info("GitHub login coming soon!", {
                      position: "top-right",
                      autoClose: 3000,
                    });
                  }}
                  className="py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl flex items-center justify-center gap-2 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Github
                    size={18}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
                <button
                  type="button"
                  disabled={isLoggingIn}
                  onClick={handleGoogleLogin}
                  className="py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl flex items-center justify-center gap-2 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Globe
                    size={18}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm font-medium">Google</span>
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