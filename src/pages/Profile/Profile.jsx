import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, Award, Calendar, BookOpen, Download, 
  TrendingUp, Medal, Target, Clock, CheckCircle,
  Share2, Edit2, Settings
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Profile = () => {
  const achievements = [
    { title: "7 Day Streak", icon: Calendar, date: "Earned 2 days ago", color: "orange" },
    { title: "Course Master", icon: Award, date: "Earned 1 week ago", color: "purple" },
    { title: "Quick Learner", icon: TrendingUp, date: "Earned 2 weeks ago", color: "blue" },
    { title: "Offline Champion", icon: Download, date: "Earned 3 weeks ago", color: "green" }
  ];

  const certificates = [
    { name: "React Development", date: "Dec 2023", credential: "REACT-2023-001" },
    { name: "JavaScript Fundamentals", date: "Nov 2023", credential: "JS-2023-042" }
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12"
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <User className="w-16 h-16" />
                </div>
                <button className="absolute bottom-0 right-0 p-2 glass rounded-full">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-gray-400 mb-4">john.doe@example.com • Member since Jan 2024</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">15</span>
                    <span className="text-sm text-gray-400">Achievements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">8</span>
                    <span className="text-sm text-gray-400">Courses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">127</span>
                    <span className="text-sm text-gray-400">Hours</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button>
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Learning Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Learning Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Course Completion</span>
                      <span>67%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Weekly Goal</span>
                      <span>8/12 hours</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '66%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quiz Average</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Certificates</h3>
                <div className="space-y-3">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass rounded-xl">
                      <div>
                        <div className="font-semibold text-sm">{cert.name}</div>
                        <div className="text-xs text-gray-400">{cert.date}</div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-${achievement.color}-500/20 rounded-lg`}>
                        <achievement.icon className={`w-5 h-5 text-${achievement.color}-400`} />
                      </div>
                      <div>
                        <div className="font-semibold">{achievement.title}</div>
                        <div className="text-xs text-gray-400">{achievement.date}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Activity Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-4 border-b border-white/10 last:border-0">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Completed lesson: Advanced React Hooks</div>
                        <div className="text-xs text-gray-400">2 hours ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;