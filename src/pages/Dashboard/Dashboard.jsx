import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, BookOpen, Download, Award, Calendar, 
  Clock, Target, Brain, ChevronRight, Zap, Flame,
  BarChart3, CheckCircle2, PlayCircle, Video, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const statsCards = [
    { icon: Clock, label: "Learning Hours", value: "127", change: "+12%", color: "blue" },
    { icon: Award, label: "Completed", value: "8", change: "+2", color: "purple" },
    { icon: Flame, label: "Day Streak", value: "15", change: "🔥", color: "orange" },
    { icon: Download, label: "Offline", value: "24", change: "Lessons", color: "green" }
  ];

  const continueCourses = [
    { id: 1, title: "Advanced React & Modern Web Development", instructor: "Sarah Johnson", progress: 45, thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee", duration: "8 hours" },
    { id: 2, title: "Machine Learning Fundamentals", instructor: "Dr. Michael Chen", progress: 20, thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", duration: "12 hours" },
    { id: 3, title: "UI/UX Design Mastery", instructor: "Emma Rodriguez", progress: 80, thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5", duration: "6 hours" }
  ];

  const weeklyData = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.5 },
    { day: "Wed", hours: 2 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 3 },
    { day: "Sat", hours: 1.5 },
    { day: "Sun", hours: 2 }
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        
        {/* Welcome Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">Student! 👋</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">Ready to continue your learning journey?</p>
        </motion.div>

        {/* Stats Grid - Responsive: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-8">
          {statsCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-${stat.color}-500/20`}>
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${stat.color}-400`} />
                </div>
                <span className="text-xs sm:text-sm text-green-400">{stat.change}</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid - Responsive: 1 column on mobile, 3 on desktop */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Left Column - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* Continue Learning - Responsive cards */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">Continue Learning</h2>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {continueCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-full sm:w-20 h-32 sm:h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm sm:text-base mb-1">{course.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-2">
                          <span>{course.instructor}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white/10 rounded-full h-1.5 sm:h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ duration: 1 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2 rounded-full"
                            />
                          </div>
                          <span className="text-xs sm:text-sm">{course.progress}%</span>
                        </div>
                      </div>
                      <button className="p-2 glass rounded-lg hover:bg-white/10 sm:self-center">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Weekly Statistics - Responsive chart */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Learning Activity</h2>
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-sm sm:text-base">Weekly Learning Hours</span>
                  </div>
                  <select className="bg-white/5 rounded-lg px-3 py-1 text-sm w-full sm:w-auto">
                    <option>This Week</option>
                    <option>Last Week</option>
                    <option>This Month</option>
                  </select>
                </div>
                
                {/* Responsive Bar Chart */}
                <div className="flex justify-around items-end h-40 sm:h-48">
                  {weeklyData.map((day, index) => (
                    <div key={day.day} className="text-center flex-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${day.hours * 30}px` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full max-w-[40px] mx-auto bg-gradient-to-t from-blue-500 to-purple-500 rounded-lg"
                        style={{ height: `${day.hours * 30}px` }}
                      />
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-2">{day.day}</div>
                      <div className="text-[10px] sm:text-xs font-semibold">{day.hours}h</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Responsive */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Study Streak - Responsive */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="relative inline-block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">15</div>
                    <div className="text-[10px] sm:text-xs text-gray-400">Days</div>
                  </div>
                </div>
                <Flame className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mt-4">15 Day Streak!</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">You're on fire! Keep going 🔥</p>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i < 5 ? 'bg-green-500' : 'bg-gray-600'}`} />
                ))}
              </div>
            </div>

            {/* AI Recommendations - Responsive */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">AI Recommendations</h2>
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <div className="space-y-3">
                {continueCourses.slice(0, 2).map((course, index) => (
                  <div key={index} className="glass rounded-xl p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-xs sm:text-sm truncate">{course.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-400">{course.duration}</p>
                      </div>
                      <button className="px-3 py-1.5 glass rounded-lg text-xs sm:text-sm whitespace-nowrap">
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloaded Lessons Card - Responsive */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
              <div className="flex items-center justify-between mb-4">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span className="text-xs sm:text-sm text-green-400">Available Offline</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">24 Lessons</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-4">Ready to learn without internet</p>
              <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2 mb-2">
                <div className="bg-green-500 h-1.5 sm:h-2 rounded-full" style={{ width: '68%' }} />
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-400">
                <span>Used 1.2 GB</span>
                <span>of 4 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;