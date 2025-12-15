import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Users, 
  Clock, 
  Calendar, 
  DollarSign, 
  Upload, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  ArrowLeft,
  Share2,
  Bookmark,
  Award,
  Target,
  FileText,
  Link,
  Eye,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const ContestDetails = () => {
  // Dummy contest data
  const contest = {
    id: 1,
    name: 'UI Design Challenge 2024',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=400&fit=crop',
    description: 'Design the next-generation user interface for a productivity app. This contest challenges designers to create intuitive and beautiful interfaces that enhance user experience and boost productivity.',
    taskDetails: 'Create a complete UI design for a productivity app including: 1) Dashboard with activity metrics, 2) Task management interface, 3) Calendar integration, 4) Team collaboration features. Submit wireframes, mockups, and a brief explanation of your design decisions.',
    prizeMoney: 1500,
    winner: { 
      name: 'Sarah Chen', 
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      username: '@sarahdesign',
      location: 'San Francisco, CA'
    },
    deadline: '2024-04-15T23:59:59',
    participantsCount: 245,
    requirements: ['UI/UX Design Skills', 'Figma or Sketch', 'Portfolio', '3+ Years Experience'],
    difficulty: 'Intermediate',
    category: 'UI/UX Design',
    organizer: 'Design Masters Inc.',
    organizerVerified: true,
    submissions: 45
  };

  const [participants, setParticipants] = useState(contest.participantsCount);
  const [isRegistered, setIsRegistered] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submission, setSubmission] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const deadlineTime = new Date(contest.deadline).getTime();
      const distance = deadlineTime - now;

      if (distance <= 0) {
        setTimeLeft('Contest Ended');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        return { days, hours, minutes, seconds };
      }
    };

    const updateTimer = () => {
      const time = calculateTimeLeft();
      setDays(time.days);
      setHours(time.hours);
      setMinutes(time.minutes);
      setSeconds(time.seconds);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [contest.deadline]);

  const handleRegister = () => {
    if (timeLeft === 'Contest Ended') return;
    setIsRegistered(true);
    setParticipants(prev => prev + 1);
    console.log('User registered and payment done');
  };

  const handleSubmitTask = () => {
    console.log('Task submitted:', submission);
    setShowModal(false);
    setSubmission('');
  };

  const isContestEnded = timeLeft === 'Contest Ended';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4 md:p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Contests
          </button>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg ${isBookmarked ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Contest Hero Section */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <div className="relative h-64 md:h-80">
            <img 
              src={contest.image} 
              alt={contest.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm text-purple-300 rounded-full text-sm">
                  {contest.category}
                </span>
                <span className="px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-blue-300 rounded-full text-sm">
                  {contest.difficulty}
                </span>
                <span className="px-3 py-1 bg-green-500/30 backdrop-blur-sm text-green-300 rounded-full text-sm">
                  {contest.submissions} Submissions
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{contest.name}</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Section */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText size={24} className="text-blue-400" />
                Contest Description
              </h2>
              <p className="text-gray-300 leading-relaxed">{contest.description}</p>
            </div>

            {/* Task Details Section */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target size={24} className="text-yellow-400" />
                Task Details & Requirements
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{contest.taskDetails}</p>
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Requirements:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contest.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl">
                        <CheckCircle size={18} className="text-green-400" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Winner Section */}
            {contest.winner && (
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Award size={24} className="text-purple-400" />
                  Previous Winner
                </h2>
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <div className="relative">
                    <img 
                      src={contest.winner.photo} 
                      alt={contest.winner.name} 
                      className="w-20 h-20 rounded-xl object-cover border-2 border-purple-500/30"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                      <Trophy size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{contest.winner.name}</h3>
                    <p className="text-gray-400">{contest.winner.username}</p>
                    <p className="text-sm text-gray-400">{contest.winner.location}</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-700 text-gray-300 rounded-xl hover:border-purple-500 hover:text-white transition-all">
                    View Winning Entry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contest Stats Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Countdown Timer */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-yellow-400" />
                    Time Remaining
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gray-800 py-3 rounded-lg">{days}</div>
                      <div className="text-xs text-gray-400 mt-1">Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gray-800 py-3 rounded-lg">{hours}</div>
                      <div className="text-xs text-gray-400 mt-1">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gray-800 py-3 rounded-lg">{minutes}</div>
                      <div className="text-xs text-gray-400 mt-1">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gray-800 py-3 rounded-lg">{seconds}</div>
                      <div className="text-xs text-gray-400 mt-1">Seconds</div>
                    </div>
                  </div>
                </div>

                {/* Prize Info */}
                <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Prize Pool</span>
                    <DollarSign size={20} className="text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-400">${contest.prizeMoney}</div>
                  <p className="text-sm text-gray-400 mt-1">Winner takes all</p>
                </div>

                {/* Participants Info */}
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Participants</span>
                    <Users size={20} className="text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400">{participants}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <Sparkles size={14} />
                    <span>Join the competition</span>
                  </div>
                </div>

                {/* Organizer Info */}
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="font-bold">DM</span>
                    </div>
                    <div>
                      <p className="font-semibold">{contest.organizer}</p>
                      {contest.organizerVerified && (
                        <span className="text-xs text-green-400 flex items-center gap-1">
                          <CheckCircle size={12} />
                          Verified Organizer
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="w-full mt-2 text-sm text-gray-300 hover:text-white transition-colors">
                    View all contests by this organizer
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleRegister}
                    disabled={isContestEnded || isRegistered}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      isContestEnded
                        ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                        : isRegistered
                        ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white cursor-default'
                        : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90'
                    }`}
                  >
                    {isContestEnded ? (
                      'Contest Ended'
                    ) : isRegistered ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle size={20} />
                        Registered & Paid
                      </span>
                    ) : (
                      'Register & Pay Entry Fee'
                    )}
                  </button>

                  {isRegistered && !isContestEnded && (
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Upload size={20} />
                      Submit Your Task
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Entry Fee</span>
                  <span className="font-semibold">$25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Submission Deadline</span>
                  <span className="font-semibold">{new Date(contest.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Winner Announcement</span>
                  <span className="font-semibold">Apr 20, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Submissions</span>
                  <span className="font-semibold">{contest.submissions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl w-full max-w-lg p-6 animate-in fade-in zoom-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Upload size={24} className="text-yellow-400" />
                Submit Your Task
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <XCircle size={20} className="text-gray-400" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={18} className="text-yellow-400" />
                  <span className="font-medium">Submission Guidelines</span>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Include all required files and documents</li>
                  <li>• Provide clear descriptions and explanations</li>
                  <li>• Add relevant links (Figma, GitHub, etc.)</li>
                  <li>• Only one submission per participant</li>
                </ul>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Task Submission
                </label>
                <textarea
                  rows="6"
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  placeholder="Provide your submission details including:
• Design files link (Figma, Adobe XD, etc.)
• GitHub repository link (if applicable)
• Live demo URL
• Brief explanation of your approach
• Any additional notes..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Files (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-yellow-500 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center gap-3">
                    <Upload size={32} className="text-gray-400" />
                    <div>
                      <p className="text-gray-300">Drop your files here or click to upload</p>
                      <p className="text-sm text-gray-500 mt-1">Maximum file size: 50MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 border border-gray-700 text-gray-300 rounded-xl hover:border-gray-600 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitTask}
                disabled={!submission.trim()}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  submission.trim()
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-500 text-white hover:opacity-90'
                    : 'bg-gray-800 text-gray-400 cursor-not-allowed'
                }`}
              >
                Submit Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContestDetails;