import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, Download, Bookmark, Share2, ChevronLeft, ChevronRight,
  FileText, Video, CheckCircle, Clock, User, Star, Heart,
  MessageCircle, ThumbsUp, BookOpen, Award, ExternalLink
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { courses } from '../../data/mockData';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id)) || courses[0];
  const [activeTab, setActiveTab] = useState('content');
  const [isDownloading, setIsDownloading] = useState(false);

  const lessons = [
    { id: 1, title: 'Introduction to the Course', duration: '10:00', type: 'video', completed: true },
    { id: 2, title: 'Setting Up Development Environment', duration: '15:30', type: 'video', completed: true },
    { id: 3, title: 'Core Concepts Explained', duration: '20:00', type: 'video', completed: false },
    { id: 4, title: 'Practical Examples', duration: '25:15', type: 'video', completed: false },
    { id: 5, title: 'Advanced Techniques', duration: '30:00', type: 'video', completed: false },
    { id: 6, title: 'Project: Build Your First App', duration: '45:00', type: 'project', completed: false },
    { id: 7, title: 'Quiz: Test Your Knowledge', duration: '15:00', type: 'quiz', completed: false }
  ];

  const resources = [
    { id: 1, name: 'Course Slides PDF', size: '2.5 MB', type: 'pdf' },
    { id: 2, name: 'Source Code Bundle', size: '1.8 MB', type: 'zip' },
    { id: 3, name: 'Exercise Files', size: '3.2 MB', type: 'zip' },
    { id: 4, name: 'Cheat Sheet', size: '0.5 MB', type: 'pdf' }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
                <Link to="/courses" className="hover:text-white">Courses</Link>
                <ChevronRight className="w-4 h-4" />
                <span>{course.category}</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{course.title}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {course.instructor}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {course.lessons} lessons
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1">4.8 (2.3k ratings)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
                <Button variant="secondary" onClick={() => setIsDownloading(true)}>
                  <Download className="w-4 h-4 mr-2" />
                  {isDownloading ? 'Downloading...' : 'Download Course'}
                </Button>
                <Button variant="outline">
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-white/10 mb-6">
              {['content', 'resources', 'discussion'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-semibold capitalize transition-all duration-200 ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-500 text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Course Content */}
            {activeTab === 'content' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                  {lessons.map((lesson, index) => (
                    <div key={lesson.id} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <div className="flex items-center space-x-3">
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-500" />
                        )}
                        <div>
                          <div className="font-medium">{lesson.title}</div>
                          <div className="text-sm text-gray-400 flex items-center">
                            {lesson.type === 'video' && <Video className="w-3 h-3 mr-1" />}
                            {lesson.type === 'quiz' && <FileText className="w-3 h-3 mr-1" />}
                            {lesson.type === 'project' && <Award className="w-3 h-3 mr-1" />}
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {lesson.completed ? 'Review' : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Resources */}
            {activeTab === 'resources' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Course Resources</h3>
                  {resources.map(resource => (
                    <div key={resource.id} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <div>
                          <div className="font-medium">{resource.name}</div>
                          <div className="text-sm text-gray-400">{resource.size}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Discussion */}
            {activeTab === 'discussion' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Discussion</h3>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="pb-4 border-b border-white/10 last:border-0">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold">Student_{index + 1}</span>
                              <span className="text-xs text-gray-400">2 hours ago</span>
                            </div>
                            <p className="text-gray-300 text-sm">Great course! The explanations are very clear.</p>
                            <div className="flex items-center space-x-3 mt-2">
                              <button className="flex items-center text-xs text-gray-400 hover:text-white">
                                <ThumbsUp className="w-3 h-3 mr-1" />
                                Like
                              </button>
                              <button className="flex items-center text-xs text-gray-400 hover:text-white">
                                <MessageCircle className="w-3 h-3 mr-1" />
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Your Progress</h3>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Course Completion</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: `${course.progress}%` }} />
                </div>
              </div>
              <div className="text-sm text-gray-400 mb-4">
                {Math.floor(course.lessons * (course.progress / 100))} of {course.lessons} lessons completed
              </div>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Continue Where You Left
              </Button>
            </Card>

            {/* Download Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-3">Offline Access</h3>
              <div className="text-sm text-gray-400 mb-3">
                Download this course to watch without internet
              </div>
              <div className="bg-green-500/10 rounded-lg p-3 mb-3">
                <div className="flex justify-between text-sm">
                  <span>Course size</span>
                  <span>2.4 GB</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Available space</span>
                  <span>3.2 GB</span>
                </div>
              </div>
              <Button className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download for Offline
              </Button>
            </Card>

            {/* Instructor Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-3">About Instructor</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div>
                  <div className="font-semibold">{course.instructor}</div>
                  <div className="text-sm text-gray-400">Senior Developer</div>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Expert in web development with 10+ years of experience. Passionate about teaching and helping students succeed.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;