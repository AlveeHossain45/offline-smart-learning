import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, User, Bell, Search, LogOut, Settings, 
  UserCircle, ChevronDown, Sun, Moon, XCircle, CheckCircle 
} from 'lucide-react';
import { useTheme, useAuth } from '../../main.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New course available!", message: "Advanced React course just added", time: "5 min ago", read: false, type: "course" },
    { id: 2, title: "Quiz reminder", message: "Complete your ML quiz today", time: "1 hour ago", read: false, type: "quiz" },
    { id: 3, title: "Achievement unlocked", message: "You earned 7-day streak badge", time: "2 hours ago", read: true, type: "achievement" },
    { id: 4, title: "Download complete", message: "React course downloaded successfully", time: "1 day ago", read: true, type: "download" }
  ]);
  
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Sample courses data for search
  const allCourses = [
    { id: 1, title: "Advanced React & Modern Web Development", category: "Development", instructor: "Sarah Johnson" },
    { id: 2, title: "Machine Learning Fundamentals", category: "AI & ML", instructor: "Dr. Michael Chen" },
    { id: 3, title: "UI/UX Design Mastery", category: "Design", instructor: "Emma Rodriguez" },
    { id: 4, title: "Data Science & Analytics", category: "Data Science", instructor: "Prof. James Wilson" },
    { id: 5, title: "Cloud Computing with AWS", category: "Cloud", instructor: "Alex Thompson" },
    { id: 6, title: "Cybersecurity Essentials", category: "Security", instructor: "Lisa Wang" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
    setIsNotificationsOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    } else {
      const filtered = allCourses.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSearchResultClick = (courseId) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/course/${courseId}`);
  };

  const handleNotificationClick = (notification) => {
    markNotificationAsRead(notification.id);
    if (notification.type === 'course') {
      navigate('/courses');
    } else if (notification.type === 'quiz') {
      navigate('/dashboard');
    }
    setIsNotificationsOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/courses', label: 'Courses' },
    { to: '/offline', label: 'Offline' },
    { to: '/ai-assistant', label: 'AI Assistant' },
    { to: '/about', label: 'About' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg"
                style={{ background: '#4F46E5', color: 'white' }}
              >
                S
              </div>
              <span 
                className="text-xl font-bold"
                style={{ color: 'var(--navbar-logo)' }}
              >
                SmartLearn
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium"
                  style={{
                    color: location.pathname === link.to ? '#4F46E5' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.color = '#4F46E5';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl transition-all"
                style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--text-secondary)' }} />
              </motion.button>
              
              {/* Notifications Button with Badge */}
              <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 rounded-xl transition-all relative"
                  style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--text-secondary)' }} />
                  {unreadCount > 0 && (
                    <span 
                      className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center"
                      style={{ background: '#EF4444', color: 'white' }}
                    >
                      {unreadCount}
                    </span>
                  )}
                </motion.button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl overflow-hidden"
                      style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(79, 70, 229, 0.1)' }}
                    >
                      <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
                        <h3 className="font-semibold">Notifications</h3>
                        {unreadCount > 0 && (
                          <button 
                            onClick={markAllAsRead}
                            className="text-xs px-2 py-1 rounded-lg transition-all"
                            style={{ background: '#4F46E510', color: '#4F46E5' }}
                          >
                            Mark all read
                          </button>
                        )}
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-8 text-center text-secondary text-sm">
                            No notifications
                          </div>
                        ) : (
                          notifications.map((notif) => (
                            <div
                              key={notif.id}
                              onClick={() => handleNotificationClick(notif)}
                              className={`p-4 border-b cursor-pointer transition-all hover:bg-opacity-5 hover:bg-current ${!notif.read ? 'bg-opacity-5' : ''}`}
                              style={{ borderColor: 'rgba(79, 70, 229, 0.05)' }}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ background: !notif.read ? '#4F46E5' : 'transparent' }} />
                                <div className="flex-1">
                                  <p className="font-medium text-sm">{notif.title}</p>
                                  <p className="text-xs text-secondary mt-1">{notif.message}</p>
                                  <p className="text-xs text-secondary mt-2">{notif.time}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl transition-all"
                style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                {darkMode ? 
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#4F46E5' }} /> : 
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#4F46E5' }} />
                }
              </motion.button>

              {/* User Menu */}
              {user ? (
                <div className="relative hidden lg:block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 p-1.5 rounded-xl"
                    style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: '#4F46E5' }}
                    >
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium hidden xl:inline" style={{ color: 'var(--text-primary)' }}>
                      {user.name?.split(' ')[0] || 'User'}
                    </span>
                    <ChevronDown className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-56 rounded-2xl overflow-hidden"
                        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(79, 70, 229, 0.1)' }}
                      >
                        <div className="p-4 border-b" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs mt-1 text-secondary">{user.email}</p>
                        </div>
                        <div className="p-2">
                          <Link to="/profile" onClick={() => setIsProfileOpen(false)}>
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-opacity-5 hover:bg-current">
                              <UserCircle className="w-4 h-4" />
                              <span className="text-sm">Profile</span>
                            </div>
                          </Link>
                          <Link to="/settings" onClick={() => setIsProfileOpen(false)}>
                            <div className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-opacity-5 hover:bg-current">
                              <Settings className="w-4 h-4" />
                              <span className="text-sm">Settings</span>
                            </div>
                          </Link>
                          <div className="h-px my-2" style={{ background: 'rgba(79, 70, 229, 0.1)' }} />
                          <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all hover:bg-red-500/10"
                            style={{ color: '#EF4444' }}
                          >
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm">Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link to="/login">
                    <button className="px-4 py-1.5 rounded-xl text-sm font-medium btn-outline">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="px-5 py-1.5 rounded-xl text-sm font-semibold btn-primary">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl"
                style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                {isMobileMenuOpen ? 
                  <X className="w-5 h-5" style={{ color: '#4F46E5' }} /> : 
                  <Menu className="w-5 h-5" style={{ color: '#4F46E5' }} />
                }
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t"
              style={{ background: 'var(--bg-card)', borderColor: 'rgba(79, 70, 229, 0.1)' }}
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl transition-all"
                    style={{
                      color: location.pathname === link.to ? '#4F46E5' : 'var(--text-secondary)',
                    }}
                  >
                    <span className="flex-1 font-medium">{link.label}</span>
                  </Link>
                ))}
                
                {/* Dark mode toggle in mobile */}
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  <div className="w-10 h-5 rounded-full relative" style={{ background: '#4F46E5' }}>
                    <div 
                      className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all`}
                      style={{ left: darkMode ? '22px' : '2px' }}
                    />
                  </div>
                </button>
                
                {!user ? (
                  <div className="pt-3 space-y-2">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-3 rounded-xl text-center font-medium btn-outline">
                        Login
                      </button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-3 rounded-xl text-center font-semibold btn-primary">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="pt-3 space-y-2">
                    <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-3 rounded-xl text-center flex items-center justify-center gap-2 btn-outline">
                        <UserCircle className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                    </Link>
                    <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full py-3 rounded-xl text-center flex items-center justify-center gap-2 btn-outline">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full py-3 rounded-xl text-center flex items-center justify-center gap-2"
                      style={{ background: '#EF444410', color: '#EF4444' }}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Modal - Fully Functional */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-4"
            style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(16px)' }}
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
              setSearchResults([]);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: -30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="w-full max-w-2xl mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-lg)' }}>
                {/* Search Input */}
                <div className="p-4 border-b" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 flex-shrink-0" style={{ color: '#4F46E5' }} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for courses, lessons, or topics..."
                      className="flex-1 bg-transparent outline-none text-base"
                      style={{ color: 'var(--text-primary)' }}
                      autoFocus
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="p-1 rounded-lg transition-all hover:bg-opacity-10 hover:bg-current"
                      >
                        <XCircle className="w-4 h-4 text-secondary" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {searchQuery.trim() === '' ? (
                    <div className="p-8 text-center">
                      <Search className="w-12 h-12 mx-auto mb-3 opacity-30" style={{ color: 'var(--text-secondary)' }} />
                      <p className="text-secondary text-sm">Type something to search courses</p>
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        <span className="text-xs px-2 py-1 rounded-lg" style={{ background: '#4F46E510', color: '#4F46E5' }}>React</span>
                        <span className="text-xs px-2 py-1 rounded-lg" style={{ background: '#4F46E510', color: '#4F46E5' }}>Machine Learning</span>
                        <span className="text-xs px-2 py-1 rounded-lg" style={{ background: '#4F46E510', color: '#4F46E5' }}>UI/UX Design</span>
                        <span className="text-xs px-2 py-1 rounded-lg" style={{ background: '#4F46E510', color: '#4F46E5' }}>Python</span>
                      </div>
                    </div>
                  ) : searchResults.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-secondary">No results found for "{searchQuery}"</p>
                      <p className="text-xs text-secondary mt-2">Try different keywords</p>
                    </div>
                  ) : (
                    <div className="divide-y" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
                      {searchResults.map((course) => (
                        <div
                          key={course.id}
                          onClick={() => handleSearchResultClick(course.id)}
                          className="p-4 cursor-pointer transition-all hover:bg-opacity-5 hover:bg-current"
                        >
                          <p className="font-medium text-sm">{course.title}</p>
                          <div className="flex gap-3 mt-1">
                            <span className="text-xs text-secondary">{course.category}</span>
                            <span className="text-xs text-secondary">•</span>
                            <span className="text-xs text-secondary">{course.instructor}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;