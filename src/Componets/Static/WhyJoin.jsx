// pages/WhyJoin.jsx
import React from 'react';
import { Link } from 'react-router';
import {
  Trophy,
  Award,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
  Globe,
  Zap,
  Star,
  Heart,
  Target,
  Clock,
  DollarSign,
  Medal,
  Briefcase,
  Network,
  Calendar,
  UserCheck,
  CheckCircle,
  ArrowRight,
  Rocket,
  Brain,
  Palette,
  Code,
  PenTool,
  Camera,
  Music,
  GamepadIcon,
  Mic,
} from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: <Trophy className="text-yellow-400" size={28} />,
      title: "Win Amazing Prizes",
      description: "Compete for cash prizes, trophies, and recognition. Top performers receive exclusive rewards.",
      color: "from-yellow-500/10 to-amber-500/10",
      border: "border-yellow-500/20",
    },
    {
      icon: <TrendingUp className="text-green-400" size={28} />,
      title: "Skill Development",
      description: "Sharpen your skills through real-world challenges and competitive environments.",
      color: "from-emerald-500/10 to-green-500/10",
      border: "border-emerald-500/20",
    },
    {
      icon: <Briefcase className="text-blue-400" size={28} />,
      title: "Career Opportunities",
      description: "Get noticed by recruiters and companies looking for top creative talent.",
      color: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: <Network className="text-purple-400" size={28} />,
      title: "Global Network",
      description: "Connect with creators worldwide and build valuable professional relationships.",
      color: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
    },
    {
      icon: <Medal className="text-orange-400" size={28} />,
      title: "Portfolio Building",
      description: "Add prestigious competition wins to your portfolio and stand out.",
      color: "from-orange-500/10 to-red-500/10",
      border: "border-orange-500/20",
    },
    {
      icon: <Shield className="text-cyan-400" size={28} />,
      title: "Safe Environment",
      description: "Participate in fair, transparent competitions with clear rules and guidelines.",
      color: "from-cyan-500/10 to-teal-500/10",
      border: "border-cyan-500/20",
    },
  ];

  const contestTypes = [
    {
      icon: <Palette size={24} className="text-purple-400" />,
      name: "Design Contests",
      count: "150+ Active",
      color: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    },
    {
      icon: <Code size={24} className="text-blue-400" />,
      name: "Coding Challenges",
      count: "120+ Active",
      color: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    },
    {
      icon: <PenTool size={24} className="text-green-400" />,
      name: "Writing Competitions",
      count: "80+ Active",
      color: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    },
    {
      icon: <Camera size={24} className="text-red-400" />,
      name: "Photography",
      count: "60+ Active",
      color: "bg-gradient-to-br from-red-600/20 to-orange-600/20",
    },
    {
      icon: <Music size={24} className="text-pink-400" />,
      name: "Music & Audio",
      count: "45+ Active",
      color: "bg-gradient-to-br from-pink-600/20 to-rose-600/20",
    },
    {
      icon: <GamepadIcon size={24} className="text-yellow-400" />,
      name: "Gaming Tournaments",
      count: "70+ Active",
      color: "bg-gradient-to-br from-yellow-600/20 to-amber-600/20",
    },
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      story: "Won $10K in design contest, now working at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d1?w=150",
      achievements: "3 Contest Wins",
    },
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      story: "From contest participant to startup founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-150",
      achievements: "5 Contest Wins",
    },
    {
      name: "Maria Rodriguez",
      role: "Content Writer",
      story: "Built freelance career through writing competitions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w-150",
      achievements: "8 Contest Wins",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & Create Profile",
      description: "Join our community in minutes with free registration",
      icon: <UserCheck size={24} />,
    },
    {
      number: "02",
      title: "Browse Contests",
      description: "Explore hundreds of contests matching your skills",
      icon: <Target size={24} />,
    },
    {
      number: "03",
      title: "Participate & Submit",
      description: "Enter contests, pay entry fees, and submit your work",
      icon: <CheckCircle size={24} />,
    },
    {
      number: "04",
      title: "Win & Get Rewarded",
      description: "Receive prizes, recognition, and career opportunities",
      icon: <Award size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
              <Sparkles className="text-yellow-400" size={18} />
              <span className="text-sm">Why Choose Creative Arena?</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Your Path to
              </span>
              <br />
              <span className="text-white">Creative Success</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Join thousands of creators who have transformed their skills into success through our platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Start Your Journey
                <Rocket size={20} />
              </Link>
              <Link
                to="/all-contest"
                className="px-8 py-4 border border-gray-700 text-gray-300 rounded-xl font-semibold hover:border-purple-500 hover:text-white transition-all"
              >
                Explore Contests
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <p className="text-gray-400">Active Creators</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
              <div className="text-3xl font-bold text-pink-400 mb-2">$500K+</div>
              <p className="text-gray-400">Total Prizes</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <p className="text-gray-400">Success Rate</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800">
              <div className="text-3xl font-bold text-green-400 mb-2">2K+</div>
              <p className="text-gray-400">Contests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Benefits of Joining <span className="text-purple-400">Creative Arena</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how participating in contests can accelerate your creative journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${benefit.color} border ${benefit.border} hover:scale-105 transition-transform duration-300`}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Contest Types */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-10 text-center">
              Diverse <span className="text-pink-400">Contest Categories</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {contestTypes.map((type, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl ${type.color} border border-gray-800 hover:border-purple-500/50 transition-all`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3">{type.icon}</div>
                    <h4 className="font-semibold mb-1">{type.name}</h4>
                    <p className="text-sm text-gray-400">{type.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-purple-400">It Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Four simple steps to start your winning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 -z-10"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white">
                    {step.number}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Real <span className="text-yellow-400">Success Stories</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our members have transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-purple-400 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{story.story}</p>
                <div className="flex items-center gap-2 text-sm text-yellow-400">
                  <Trophy size={16} />
                  <span>{story.achievements}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-950/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-green-400">Choose Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Compare with other platforms and see the difference
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                  <th className="p-6 text-left">Features</th>
                  <th className="p-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xl font-bold text-purple-400">Creative Arena</span>
                      <span className="text-sm text-gray-400">Premium Platform</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xl font-bold">Other Platforms</span>
                      <span className="text-sm text-gray-400">Basic Features</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Guaranteed Payout", arena: "Yes", others: "Sometimes" },
                  { feature: "Fair Judging System", arena: "Transparent", others: "Opaque" },
                  { feature: "24/7 Support", arena: "Yes", others: "Limited" },
                  { feature: "Community Access", arena: "Global Network", others: "Limited" },
                  { feature: "Skill Development", arena: "Resources Provided", others: "Self-Guided" },
                  { feature: "Career Opportunities", arena: "Direct Recruitment", others: "Rare" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center">
                      <span className="inline-flex items-center gap-2 text-green-400">
                        <CheckCircle size={18} />
                        {row.arena}
                      </span>
                    </td>
                    <td className="p-6 text-center text-gray-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
            <p className="text-gray-400">Get answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is there an entry fee for contests?",
                answer: "Most contests have a small entry fee which goes towards prize pools and platform maintenance. Some free contests are also available."
              },
              {
                question: "How are winners selected?",
                answer: "Winners are selected through a transparent judging process by contest creators and sometimes community voting."
              },
              {
                question: "Can I participate from any country?",
                answer: "Yes! Creative Arena is open to participants worldwide, unless specified otherwise in contest rules."
              },
              {
                question: "How do I receive my prize money?",
                answer: "Prize money is transferred securely via PayPal, bank transfer, or other payment methods within 7-14 days of winner declaration."
              },
              {
                question: "Are there any age restrictions?",
                answer: "You must be at least 18 years old to participate in contests with monetary prizes. Some contests may have different age requirements."
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-purple-400">Q:</span> {faq.question}
                </h4>
                <p className="text-gray-300 pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-rose-900/20 border border-purple-800/30">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
              <Zap className="text-yellow-400" size={18} />
              <span className="text-sm">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start <span className="text-gradient-to-r from-purple-400 to-pink-400">Your Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful creators today and take your skills to the next level
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/register"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-3 group"
              >
                Join Now - It's Free
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/probleamsheet"
                className="px-10 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500/10 transition-all"
              >
                Explore Probleam
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              No credit card required to sign up
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoin;