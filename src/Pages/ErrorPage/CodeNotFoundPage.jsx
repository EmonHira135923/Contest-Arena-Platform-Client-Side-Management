import React from "react";
import { Link } from "react-router";
import {
  Code2,
  Bug,
  Terminal,
  Cpu,
  GitBranch,
  Rocket,
  Home,
  Search,
  Coffee,
} from "lucide-react";

const CodeNotFoundPage = () => {
  const programmingLanguages = [
    { name: "JavaScript", color: "bg-yellow-500", icon: "JS" },
    { name: "Python", color: "bg-blue-500", icon: "Py" },
    { name: "React", color: "bg-cyan-500", icon: "⚛️" },
    { name: "Node.js", color: "bg-green-500", icon: "⬢" },
    { name: "TypeScript", color: "bg-blue-600", icon: "TS" },
    { name: "Java", color: "bg-red-500", icon: "☕" },
  ];

  const codingChallenges = [
    { title: "Algorithm Master", difficulty: "Hard", participants: 1245 },
    { title: "Frontend Wizard", difficulty: "Medium", participants: 2890 },
    { title: "API Architect", difficulty: "Expert", participants: 876 },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-mono">
      {/* Terminal-like Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black"></div>

      {/* Animated Code Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-sm font-mono whitespace-nowrap animate-slide"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              left: "-200px",
            }}
          >
            {`const error = ${i} === 404 ? "PageNotFound" : "ContinueCoding";`}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-12 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Code2 size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-400">
                  Creative Arena
                </h1>
                <p className="text-gray-400 text-sm">Code & Compete</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-green-300">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm">server: online</span>
              </div>
              <div className="text-gray-400 text-sm">
                <Terminal size={18} />
              </div>
            </div>
          </header>

          {/* Main 404 Content */}
          <main className="text-center">
            {/* Error Code Display */}
            <div className="relative mb-10">
              <div className="inline-block p-8 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl">
                <div className="text-7xl md:text-9xl font-bold text-red-500 font-mono mb-4">
                  4<span className="text-yellow-500">0</span>4
                </div>
                <div className="flex items-center justify-center gap-3 text-lg text-gray-300">
                  <Bug size={24} className="text-red-400" />
                  <span className="font-mono">
                    Error: PageNotFoundException
                  </span>
                </div>
              </div>

              {/* Binary Code Animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Error Message */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Code 404: Path Not Found
                </span>
              </h2>

              <div className="bg-gray-900/50 p-6 rounded-xl border-l-4 border-red-500 mb-6 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal size={20} className="text-red-400" />
                  <code className="text-red-300">
                    $ curl -X GET https://creative-arena.com/page
                  </code>
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-green-400">→</span> Status: 404 Not
                  Found
                  <br />
                  <span className="text-green-400">→</span> Message: The
                  requested endpoint does not exist
                  <br />
                  <span className="text-green-400">→</span> Solution: Check the
                  URL or navigate to available routes
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link
                to="/"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <Home size={20} />
                <span>Return to Home</span>
                <div className="ml-2 px-2 py-1 bg-green-700 rounded text-xs">
                  CTRL+H
                </div>
              </Link>

              <Link
                to="/coding-challenges"
                className="group flex items-center gap-3 px-8 py-4 bg-gray-900 border-2 border-green-500/30 text-green-300 rounded-lg font-medium hover:border-green-500 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Rocket size={20} />
                <span>View Coding Challenges</span>
                <div className="ml-2 px-2 py-1 bg-green-900/50 rounded text-xs">
                  50+ Active
                </div>
              </Link>
            </div>

            {/* Programming Languages */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                <Cpu className="text-cyan-400" />
                <span>Popular Languages</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {programmingLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`${lang.color} px-6 py-3 rounded-lg flex items-center gap-3 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:shadow-lg`}
                  >
                    <span className="text-lg">{lang.icon}</span>
                    <span className="font-bold">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ongoing Challenges */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                <GitBranch className="text-purple-400" />
                <span>Active Coding Contests</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {codingChallenges.map((challenge, index) => (
                  <Link
                    key={index}
                    to={`/challenge/${index + 1}`}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 hover:bg-gray-900 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-lg group-hover:text-green-300 transition-colors">
                        {challenge.title}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          challenge.difficulty === "Hard"
                            ? "bg-red-500/20 text-red-300"
                            : challenge.difficulty === "Expert"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {challenge.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>
                          {challenge.participants.toLocaleString()} coders
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🏆</span>
                        <span>
                          ${(challenge.participants * 2).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Debug Section */}
            <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                <Terminal className="text-yellow-400" />
                <span>Quick Debug</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-green-400 text-sm mb-2">
                    $ npm run available-routes
                  </div>
                  <div className="text-gray-300 text-sm">
                    /home
                    <br />
                    /coding-challenges
                    <br />
                    /leaderboard
                    <br />
                    /contests
                    <br />
                    /community
                    <br />
                    /profile
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-green-400 text-sm mb-2">
                    $ git status
                  </div>
                  <div className="text-gray-300 text-sm">
                    On branch: main
                    <br />
                    Your branch is up to date
                    <br />
                    Nothing to commit
                    <br />
                    Working tree clean
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-400">
                <Coffee size={20} />
                <span className="text-sm">Need help? Contact our dev team</span>
                <Link
                  to="/contact"
                  className="text-green-400 hover:text-green-300 text-sm"
                >
                  dev@creativearena.com
                </Link>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                <span className="text-green-400">Creative Arena</span> • Code.
                Compete. Create.
              </div>
              <div className="flex gap-6 text-gray-500 text-sm">
                <Link
                  to="/docs"
                  className="hover:text-green-400 transition-colors"
                >
                  API Docs
                </Link>
                <Link
                  to="/github"
                  className="hover:text-green-400 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  to="/discord"
                  className="hover:text-green-400 transition-colors"
                >
                  Discord
                </Link>
              </div>
            </div>
            <div className="mt-6 text-gray-600 text-xs">
              <span className="font-mono">console.log("Keep coding! 🚀");</span>
            </div>
          </footer>
        </div>
      </div>

      {/* CSS for sliding animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 200px));
          }
        }
        .animate-slide {
          animation: slide 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CodeNotFoundPage;
