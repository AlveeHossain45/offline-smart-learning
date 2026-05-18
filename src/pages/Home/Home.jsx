import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Zap, BookOpen, Award, Globe, Cpu, Shield, Star, TrendingUp } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: "50K+", label: "Active Students" },
    { value: "200+", label: "Expert Instructors" },
    { value: "1000+", label: "Video Lessons" },
    { value: "98%", label: "Success Rate" }
  ];

  const features = [
    { icon: Download, title: "Offline First", description: "Download courses and learn anywhere, anytime" },
    { icon: Cpu, title: "AI-Powered", description: "Personalized learning recommendations" },
    { icon: Zap, title: "Smart Sync", description: "Progress syncs when you're online" },
    { icon: Shield, title: "Secure Storage", description: "Your data is always protected" }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Computer Science Student",
      content: "This platform changed how I learn. Offline access is a game-changer!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Web Developer",
      content: "The AI study assistant is incredibly helpful. Best learning investment ever.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      content: "Finally a platform that understands offline learning needs. The progress sync is flawless.",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Fully Responsive */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - Responsive */}
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full glass mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm">🚀 Launching the future of education</span>
            </div>
            
            {/* Headline - Responsive font sizes */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Master Skills{' '}
              <span className="gradient-text">Anytime, Anywhere</span>
              <br className="hidden sm:block" />
              <span className="text-2xl sm:text-3xl md:text-4xl block mt-2 sm:mt-0 sm:inline">Even Without Internet</span>
            </h1>
            
            {/* Description - Responsive */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-10 px-4">
              Join thousands of students learning offline-first with our smart platform. 
              Download, learn, and track progress without internet connection.
            </p>
            
            {/* CTA Buttons - Responsive: column on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
              <a href="/courses" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
                Start Learning Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-all text-sm sm:text-base">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download App
              </button>
            </div>
            
            {/* Stats - Responsive grid: 2x2 on mobile, 4x1 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Animated background - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose{' '}
              <span className="gradient-text">SmartLearn?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Everything you need for a modern learning experience
            </p>
          </div>
          
          {/* Features Grid - Responsive: 1x4 on mobile, 2x2 on tablet, 4x1 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Learning Showcase - Responsive */}
      <section className="py-12 sm:py-20 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full glass mb-3 sm:mb-4">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">Offline First</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Learn Without{' '}
                <span className="gradient-text">Internet</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Download entire courses, watch videos, read materials, and take quizzes - 
                all without an internet connection. Your progress syncs automatically when you're back online.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Download entire courses with one click</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Track progress offline</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Smart storage management</span>
                </li>
              </ul>
              <button className="w-full sm:w-auto px-6 py-3 glass rounded-xl font-semibold hover:bg-white/10 transition-all">
                Learn More About Offline
              </button>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400">Offline Mode</span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm sm:text-base">Machine Learning Course</h4>
                      <div className="text-xs sm:text-sm text-green-400">● Downloaded</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                      <div className="bg-green-500 h-1.5 sm:h-2 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-sm sm:text-base">React Development</h4>
                      <div className="text-xs sm:text-sm text-blue-400">● Downloading...</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                      <div className="bg-blue-500 h-1.5 sm:h-2 rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Responsive */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What Our{' '}
              <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied learners worldwide
            </p>
          </div>
          
          {/* Testimonials Grid - Responsive: 1x3 on mobile, 3x1 on desktop */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;