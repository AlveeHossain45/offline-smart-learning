import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, Clock, User, Star, ChevronDown, BookOpen, TrendingUp } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { courses } from '../../data/mockData';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Development', 'AI & ML', 'Design', 'Data Science', 'Business', 'Marketing'];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Explore <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-gray-400">Discover the best courses to advance your career</p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'glass text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-2 px-4 py-3 glass rounded-xl">
              <Filter className="w-4 h-4" />
              <span>Sort: {sortBy}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Trending Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl font-semibold">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course, index) => (
              <TrendingCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </motion.div>

        {/* All Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Courses</h2>
            <span className="text-sm text-gray-400">{filteredCourses.length} courses found</span>
          </div>
          
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/course/${course.id}`}>
        <Card className="overflow-hidden h-full">
          <div className="relative">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            {course.isDownloaded && (
              <div className="absolute top-2 right-2 bg-green-500/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs flex items-center">
                <Download className="w-3 h-3 mr-1" />
                Offline
              </div>
            )}
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 text-xs">
              {course.level}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-blue-400">{course.category}</span>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs ml-1">4.8</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
            <div className="flex items-center text-sm text-gray-400 mb-3">
              <User className="w-3 h-3 mr-1" />
              <span>{course.instructor}</span>
              <Clock className="w-3 h-3 ml-3 mr-1" />
              <span>{course.duration}</span>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                />
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

const TrendingCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden">
            <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sm mb-1">{course.title}</h4>
            <p className="text-xs text-gray-400">{course.instructor}</p>
            <div className="flex items-center mt-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="text-xs ml-1">4.8</span>
              <span className="text-xs text-gray-400 ml-2">{course.duration}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Courses;