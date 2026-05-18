import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, BookOpen, Download, Award, Calendar, 
  Clock, Target, Brain, ChevronRight, Zap, Flame,
  BarChart3, CheckCircle2, PlayCircle, Video, Star,
  Users, GraduationCap, Trophy, Medal
} from 'lucide-react';

const Dashboard = () => {
  const statsCards = [
    { icon: Clock, label: "Learning Hours", value: "127", change: "+12%", color: "blue", bg: "from-blue-500/20 to-blue-600/20" },
    { icon: Trophy, label: "Completed", value: "8", change: "+2", color: "purple", bg: "from-purple-500/20 to-purple-600/20" },
    { icon: Flame, label: "Day Streak", value: "15", change: "🔥", color: "orange", bg: "from-orange-500/20 to-orange-600/20" },
    { icon: Download, label: "Offline", value: "24", change: "Lessons", color: "green", bg: "from-green-500/20 to-green-600/20" }
  ];

  const continueCourses = [
    { id: 1, title: "Advanced React & Modern Web Development", instructor: "Sarah Johnson", progress: 45, thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee", duration: "8 hours", lessons: 24, completed: 11 },
    { id: 2, title: "Machine Learning Fundamentals", instructor: "Dr. Michael Chen", progress: 20, thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", duration: "12 hours", lessons: 36, completed: 7 },
    { id: 3, title: "UI/UX Design Mastery", instructor: "Emma Rodriguez", progress: 80, thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5", duration: "6 hours", lessons: 18, completed: 14 }
  ];

  const achievements = [
    { title: "7 Day Streak", icon: Flame, color: "orange", earned: "2 days ago" },
    { title: "Course Master", icon: Trophy, color: "purple", earned: "1 week ago" },
    { title: "Quick Learner", icon: Zap, color: "blue", earned: "2 weeks ago" },
    { title: "Offline Champion", icon: Download, color: "green", earned: "3 weeks ago" }
  ];

  const weeklyData = [2.5, 3.5, 2, 4, 3, 1.5, 2];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">Student! 👋</span>
          </h1>
          <p className="text-gray-400">Ready to continue your learning journey?</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl p-4 bg-gradient-to-br ${stat.bg}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl bg-${stat.color}-500/20`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                </div>
                <span className="text-sm text-green-400">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Continue Learning */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Continue Learning</h2>
                <Link to="/courses">
                  <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="space-y-4">
                {continueCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-4 hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                          <span>{course.instructor}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.completed}/{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white/10 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ duration: 1 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            />
                          </div>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                      </div>
                      <Link to={`/course/${course.id}`}>
                        <button className="p-2 glass rounded-xl hover:bg-white/10 transition-colors">
                          <PlayCircle className="w-6 h-6" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Activity Chart */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Learning Activity</h2>
              <div className="glass rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Weekly Learning Hours</span>
                  </div>
                  <select className="bg-white/5 rounded-lg px-3 py-1 text-sm">
                    <option>This Week</option>
                    <option>Last Week</option>
                    <option>This Month</option>
                  </select>
                </div>
                <div className="flex justify-around items-end h-48">
                  {weeklyData.map((hours, index) => (
                    <div key={index} className="text-center flex-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${hours * 30}px` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full max-w-[40px] mx-auto bg-gradient-to-t from-blue-500 to-purple-500 rounded-lg relative group"
                        style={{ height: `${hours * 30}px` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {hours} hours
                        </div>
                      </motion.div>
                      <div className="text-xs text-gray-400 mt-2">{days[index]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Study Streak */}
            <div className="glass rounded-2xl p-6 text-center bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-full border-4 border-orange-500/30 flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">15</div>
                    <div className="text-xs text-gray-400">Days</div>
                  </div>
                </div>
                <Flame className="absolute -top-2 -right-2 w-8 h-8 text-orange-500 animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold mt-4">15 Day Streak!</h3>
              <p className="text-sm text-gray-400 mt-1">You're on fire! Keep going 🔥</p>
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < 5 ? 'bg-green-500' : 'bg-gray-600'}`} />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Recent Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-3 flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-xl bg-${achievement.color}-500/20`}>
                      <achievement.icon className={`w-5 h-5 text-${achievement.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{achievement.title}</p>
                      <p className="text-xs text-gray-400">{achievement.earned}</p>
                    </div>
                    <Award className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="glass rounded-2xl p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">AI Recommendation</h3>
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Based on your learning pattern, we recommend:
              </p>
              <div className="bg-white/5 rounded-xl p-3 mb-3">
                <p className="font-semibold text-sm">Advanced React Patterns</p>
                <p className="text-xs text-gray-400">8 hours • 24 lessons</p>
              </div>
              <Link to="/course/1">
                <button className="w-full py-2 glass rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;