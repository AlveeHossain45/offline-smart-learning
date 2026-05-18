import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, CheckCircle, Wifi, WifiOff, HardDrive, 
  Settings, Trash2, AlertCircle, Clock, Film, BookOpen,
  ChevronRight, Database, Battery, Zap
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { courses } from '../../data/mockData';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [downloadedCourses, setDownloadedCourses] = useState(courses.filter(c => c.isDownloaded));
  const [downloading, setDownloading] = useState(null);
  const [storageUsed, setStorageUsed] = useState(1.2);
  const [storageTotal, setStorageTotal] = useState(4);
  const [dataSaver, setDataSaver] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleDownload = (courseId) => {
    setDownloading(courseId);
    setTimeout(() => {
      const course = courses.find(c => c.id === courseId);
      setDownloadedCourses([...downloadedCourses, course]);
      setDownloading(null);
      setStorageUsed(storageUsed + 1.2);
    }, 3000);
  };

  const handleRemoveDownload = (courseId) => {
    setDownloadedCourses(downloadedCourses.filter(c => c.id !== courseId));
    setStorageUsed(storageUsed - 1.2);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Offline <span className="gradient-text">Learning</span>
              </h1>
              <p className="text-gray-400">Access your downloaded courses without internet</p>
            </div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${isOnline ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
              {isOnline ? <Wifi className="w-4 h-4 text-green-400" /> : <WifiOff className="w-4 h-4 text-red-400" />}
              <span className={`text-sm ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
                {isOnline ? 'Online' : 'Offline Mode'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Download className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-2xl font-bold">{downloadedCourses.length}</span>
            </div>
            <h3 className="font-semibold mb-1">Downloaded Courses</h3>
            <p className="text-sm text-gray-400">Ready for offline access</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <HardDrive className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-2xl font-bold">{storageUsed} GB</span>
            </div>
            <h3 className="font-semibold mb-1">Storage Used</h3>
            <div className="w-full bg-white/10 rounded-full h-2 mt-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(storageUsed / storageTotal) * 100}%` }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">of {storageTotal} GB total</p>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Battery className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold">Data Saver {dataSaver ? 'ON' : 'OFF'}</span>
              </div>
            </div>
            <h3 className="font-semibold mb-1">Smart Downloads</h3>
            <p className="text-sm text-gray-400 mb-3">Optimize storage and download quality</p>
            <Button variant="outline" size="sm" onClick={() => setDataSaver(!dataSaver)}>
              {dataSaver ? 'Disable' : 'Enable'} Data Saver
            </Button>
          </Card>
        </motion.div>

        {/* Available for Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold mb-4">Available for Download</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => !downloadedCourses.find(dc => dc.id === c.id)).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex items-center space-x-4">
                    <img src={course.thumbnail} alt={course.title} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{course.title}</h3>
                      <p className="text-xs text-gray-400 mb-2">{course.duration}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-blue-400">1.2 GB</span>
                        {downloading === course.id ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent" />
                            <span className="text-xs">Downloading...</span>
                          </div>
                        ) : (
                          <Button size="sm" onClick={() => handleDownload(course.id)}>
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Downloaded Courses */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Downloads</h2>
            <button className="text-sm text-gray-400 hover:text-white flex items-center">
              <Settings className="w-4 h-4 mr-1" />
              Manage Storage
            </button>
          </div>
          
          <AnimatePresence>
            {downloadedCourses.length === 0 ? (
              <Card className="p-12 text-center">
                <Download className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Downloads Yet</h3>
                <p className="text-gray-400">Download courses to learn offline</p>
              </Card>
            ) : (
              <div className="space-y-4">
                {downloadedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img src={course.thumbnail} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <div className="flex items-center space-x-3 text-sm text-gray-400">
                              <span>{course.duration}</span>
                              <span>•</span>
                              <span className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                                Downloaded
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <div className="w-full bg-white/10 rounded-full h-1.5 w-32">
                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${course.progress}%` }} />
                              </div>
                              <span className="text-xs">{course.progress}% complete</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Film className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleRemoveDownload(course.id)}>
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Offline Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Offline Learning Tips</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Download courses before traveling or entering areas with poor connectivity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Enable Data Saver mode to optimize storage usage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Your progress will sync automatically when you're back online
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Offline;