import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Zap, BookOpen, Award, Globe, Cpu, Shield, Star, TrendingUp, Play, ChevronRight, Wifi, WifiOff, Battery, Cloud } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: "50K+", label: "Active Students", icon: Users },
    { value: "200+", label: "Expert Instructors", icon: Users },
    { value: "1000+", label: "Video Lessons", icon: Play },
    { value: "98%", label: "Success Rate", icon: Award }
  ];

  const features = [
    { icon: Download, title: "Offline First", description: "Download courses and learn anywhere, anytime without internet", color: "from-blue-500 to-cyan-500" },
    { icon: Cpu, title: "AI-Powered", description: "Personalized learning recommendations just for you", color: "from-purple-500 to-pink-500" },
    { icon: Zap, title: "Smart Sync", description: "Progress syncs automatically when you're back online", color: "from-yellow-500 to-orange-500" },
    { icon: Shield, title: "Secure Storage", description: "Your data is always protected and encrypted", color: "from-green-500 to-emerald-500" }
  ];

  const popularCourses = [
    {
      id: 1,
      title: "Advanced React & Modern Web Development",
      instructor: "Sarah Johnson",
      duration: "8 hours",
      level: "Advanced",
      rating: 4.9,
      students: 12453,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      duration: "12 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 8942,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      instructor: "Emma Rodriguez",
      duration: "6 hours",
      level: "Beginner",
      rating: 4.7,
      students: 15234,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      instructor: "Prof. James Wilson",
      duration: "15 hours",
      level: "Advanced",
      rating: 4.9,
      students: 6734,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-luxury mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">📚 Offline-First Learning Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              Master Skills{' '}
              <span className="gradient-text">Anytime,</span>
              <br />
              <span className="gradient-text">Anywhere</span>
            </h1>

            <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-10">
              Join 50,000+ students learning offline-first with our smart platform. 
              Download, learn, and track progress without internet connection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/courses">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 btn-primary rounded-xl font-semibold flex items-center gap-2"
                >
                  Start Learning Free
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/offline">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 btn-outline rounded-xl font-semibold flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Learn Offline
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="luxury-card text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose{' '}
              <span className="gradient-text">SmartLearn?</span>
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Everything you need for a modern, premium learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Learning Showcase */}
      <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full glass-luxury mb-4">
                <Download className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm">Offline First Platform</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Learn Without{' '}
                <span className="gradient-text">Internet</span>
              </h2>
              <p className="text-secondary mb-6 leading-relaxed">
                Download entire courses, watch videos, read materials, and take quizzes - 
                all without an internet connection. Your progress syncs automatically when you're back online.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Download entire courses with one click",
                  "Track progress even when offline",
                  "Smart storage management",
                  "Auto-sync when back online"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-purple)' }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/offline">
                <button className="px-6 py-3 btn-primary rounded-xl font-semibold">
                  Explore Offline Features
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="luxury-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm text-secondary ml-2">Offline Mode Active</span>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Advanced React Course", progress: 45, status: "Downloaded", color: "green" },
                    { title: "Machine Learning", progress: 68, status: "Downloading...", color: "blue" },
                    { title: "UI/UX Design", progress: 80, status: "Completed", color: "purple" }
                  ].map((item, i) => (
                    <div key={i} className="bg-opacity-5 bg-current rounded-lg p-4" style={{ background: 'rgba(79, 70, 229, 0.05)' }}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <span className={`text-xs text-${item.color}-400`}>● {item.status}</span>
                      </div>
                      <div className="w-full rounded-full h-2" style={{ background: 'rgba(79, 70, 229, 0.1)' }}>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1 }}
                          className={`h-2 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600`}
                          style={{ background: 'var(--accent-purple)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-luxury rounded-full px-3 py-1 text-xs flex items-center gap-1">
                <WifiOff className="w-3 h-3" />
                Offline Ready
              </div>
              <div className="absolute -bottom-4 -left-4 glass-luxury rounded-full px-3 py-1 text-xs flex items-center gap-1">
                <Cloud className="w-3 h-3" />
                Auto Sync
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Popular <span className="gradient-text">Courses</span>
              </h2>
              <p className="text-secondary">Most enrolled courses this month</p>
            </div>
            <Link to="/courses">
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                View All
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 glass-luxury rounded-lg px-2 py-1 text-xs">
                    ⭐ {course.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 glass-luxury rounded-lg px-2 py-1 text-xs">
                    {course.level}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-secondary mb-3">{course.instructor}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <Play className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <button className="px-4 py-2 btn-outline rounded-lg text-sm">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxury-card p-12 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(79, 70, 229, 0.1)' }}>
              <Cpu className="w-10 h-10" style={{ color: 'var(--accent-purple)' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Your{' '}
              <span className="gradient-text">AI Study Assistant</span>
            </h2>
            <p className="text-secondary mb-8 max-w-lg mx-auto">
              Get personalized recommendations, smart study plans, and instant answers to your questions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/ai-assistant">
                <button className="px-8 py-4 btn-primary rounded-xl font-semibold">
                  Try AI Assistant
                </button>
              </Link>
              <Link to="/courses">
                <button className="px-8 py-4 btn-outline rounded-xl font-semibold">
                  Browse Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-card p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your{' '}
              <span className="gradient-text">Learning Journey?</span>
            </h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of students already learning with SmartLearn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 btn-primary rounded-xl font-semibold"
                >
                  Get Started Free
                </motion.button>
              </Link>
              <Link to="/courses">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 btn-outline rounded-xl font-semibold"
                >
                  Browse Courses
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Users icon component
const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default Home;