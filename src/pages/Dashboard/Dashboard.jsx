import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Clock, BookOpen, Download, Award, 
  Calendar, Target, Brain, ChevronRight,
  BarChart3, PlayCircle, Star, Users,
  Trophy, Flame, Activity, MessageCircle
} from 'lucide-react';
import { useAuth } from '../../main.jsx';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');
  const { user } = useAuth();

  const statsCards = [
    { icon: Clock, label: "Learning Hours", value: "127", change: "+12%", color: "#4F46E5" },
    { icon: Trophy, label: "Completed", value: "8", change: "+2", color: "#8B5CF6" },
    { icon: Flame, label: "Day Streak", value: "15", change: "+5", color: "#F59E0B" },
    { icon: Download, label: "Offline", value: "24", change: "+8", color: "#10B981" }
  ];

  const continueCourses = [
    { 
      id: 1, 
      title: "Advanced React & Modern Web Development", 
      instructor: "Sarah Johnson", 
      progress: 45, 
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee", 
      duration: "8 hours", 
      lessons: 24, 
      completed: 11
    },
    { 
      id: 2, 
      title: "Machine Learning Fundamentals", 
      instructor: "Dr. Michael Chen", 
      progress: 20, 
      thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", 
      duration: "12 hours", 
      lessons: 36, 
      completed: 7
    },
    { 
      id: 3, 
      title: "UI/UX Design Mastery", 
      instructor: "Emma Rodriguez", 
      progress: 80, 
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5", 
      duration: "6 hours", 
      lessons: 18, 
      completed: 14
    }
  ];

  const achievements = [
    { title: "7 Day Streak", icon: Flame, color: "#F59E0B", earned: "2 days ago" },
    { title: "Course Master", icon: Trophy, color: "#8B5CF6", earned: "1 week ago" },
    { title: "Quick Learner", icon: Target, color: "#3B82F6", earned: "2 weeks ago" },
    { title: "Offline Champion", icon: Download, color: "#10B981", earned: "3 weeks ago" }
  ];

  const weeklyData = [2.5, 3.5, 2, 4, 3, 1.5, 2.5];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const maxHours = Math.max(...weeklyData);

  // Get user's first name
  const getFirstName = (name) => {
    if (!name) return 'Student';
    return name.split(' ')[0];
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* Header - Dynamic user name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Dashboard, <span className="gradient-text">{getFirstName(user?.name)}</span>
          </h1>
          <p className="text-secondary">Track your learning progress and achievements</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl" style={{ background: `${stat.color}15` }}>
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: '#10B98120', color: '#10B981' }}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Continue Learning */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Continue Learning */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Continue Learning</h2>
                <Link to="/courses">
                  <button className="text-sm flex items-center gap-1 text-purple-500 hover:gap-2 transition-all">
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
                    className="luxury-card p-4"
                  >
                    <div className="flex gap-4">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-24 h-24 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold">{course.title}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#4F46E515', color: '#4F46E5' }}>
                            {course.completed}/{course.lessons}
                          </span>
                        </div>
                        <p className="text-sm text-secondary mb-2">{course.instructor}</p>
                        <div className="flex items-center gap-3 text-xs text-secondary mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <div className="w-full rounded-full h-1.5" style={{ background: '#4F46E520' }}>
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1 }}
                                className="h-1.5 rounded-full"
                                style={{ background: '#4F46E5' }}
                              />
                            </div>
                          </div>
                          <Link to={`/course/${course.id}`}>
                            <button className="px-4 py-1.5 text-sm font-medium rounded-lg transition-all hover:opacity-80" style={{ background: '#4F46E5', color: 'white' }}>
                              Continue
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Activity Chart */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Learning Activity</h2>
              <div className="luxury-card p-5">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">Weekly Hours</span>
                  </div>
                  <div className="flex gap-2">
                    {['weekly', 'monthly'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className="px-3 py-1 rounded-lg text-xs font-medium transition-all capitalize"
                        style={{
                          background: selectedPeriod === period ? '#4F46E5' : 'transparent',
                          color: selectedPeriod === period ? 'white' : '#9CA3AF'
                        }}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-around items-end h-48">
                  {weeklyData.map((hours, index) => (
                    <div key={index} className="text-center flex-1">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(hours / maxHours) * 120}px` }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="w-full max-w-[40px] mx-auto rounded-lg"
                        style={{ 
                          background: '#4F46E5',
                          height: `${(hours / maxHours) * 120}px`,
                          opacity: 0.7 + (hours / maxHours) * 0.3
                        }}
                      />
                      <div className="text-xs text-secondary mt-2">{days[index]}</div>
                      <div className="text-xs font-medium mt-1 text-purple-500">{hours}h</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Current Streak */}
            <div className="luxury-card p-5 text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#F59E0B10', border: '2px solid #F59E0B' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-500">15</div>
                  <div className="text-xs text-secondary">Days</div>
                </div>
              </div>
              <h3 className="font-semibold mb-1">15 Day Streak</h3>
              <p className="text-xs text-secondary">Keep up the great work, {getFirstName(user?.name)}!</p>
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i < 5 ? '#10B981' : '#4F46E520' }} />
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="luxury-card p-3 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-xl" style={{ background: `${achievement.color}15` }}>
                      <achievement.icon className="w-4 h-4" style={{ color: achievement.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-secondary">{achievement.earned}</p>
                    </div>
                    <Award className="w-4 h-4 text-amber-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="luxury-card p-5" style={{ background: 'linear-gradient(135deg, #4F46E508, #8B5CF608)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold">AI Recommendation</h3>
              </div>
              <p className="text-sm text-secondary mb-3">
                Based on your progress, {getFirstName(user?.name)}:
              </p>
              <div className="p-3 rounded-xl mb-3" style={{ background: '#4F46E510' }}>
                <p className="font-medium text-sm">Advanced React Patterns</p>
                <p className="text-xs text-secondary mt-1">8 hours • 24 lessons</p>
              </div>
              <Link to="/ai-assistant">
                <button className="w-full py-2 rounded-lg text-sm font-medium transition-all" style={{ background: '#4F46E5', color: 'white' }}>
                  Ask AI Assistant
                </button>
              </Link>
            </div>

            {/* Offline Storage */}
            <div className="luxury-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Download className="w-5 h-5 text-emerald-500" />
                <h3 className="font-semibold">Offline Storage</h3>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-secondary">Used</span>
                  <span>1.2 GB / 4 GB</span>
                </div>
                <div className="w-full rounded-full h-1.5" style={{ background: '#4F46E520' }}>
                  <div className="w-[30%] h-1.5 rounded-full" style={{ background: '#10B981' }} />
                </div>
              </div>
              <Link to="/offline">
                <button className="w-full mt-3 py-1.5 rounded-lg text-xs font-medium transition-all" style={{ background: '#10B98110', color: '#10B981' }}>
                  Manage Downloads
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