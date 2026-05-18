import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, BookOpen, User, Sun, Moon, Bell, 
  Search, Download, Sparkles, Home, LayoutDashboard, 
  Info, LogOut, Settings, UserCircle, ChevronDown,
  Brain, Award
} from 'lucide-react';

// Simple theme context
const useTheme = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return { darkMode, toggleDarkMode: () => setDarkMode(!darkMode) };
};

// Simple auth context
const useAuth = () => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return { user, logout };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  // ALL NAVIGATION LINKS - Complete list
  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/courses', label: 'Courses', icon: BookOpen },
    { to: '/offline', label: 'Offline', icon: Download },
    { to: '/ai-assistant', label: 'AI Assistant', icon: Brain },
    { to: '/about', label: 'About', icon: Info }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group z-10">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl"
              />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                SmartLearn
              </span>
            </Link>

            {/* Desktop Navigation - ALL LINKS SHOWN HERE */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm
                    ${location.pathname === link.to 
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              {/* Notifications */}
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
                <Bell className="w-4 h-4 md:w-5 md:h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
              </button>

              {/* User Menu */}
              {user ? (
                <div className="relative hidden lg:block">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-sm hidden xl:inline">{user.name?.split(' ')[0] || 'User'}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl z-50"
                      >
                        <div className="p-3 border-b border-white/10">
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-xs text-gray-400 truncate">{user.email}</p>
                        </div>
                        <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-white/10 transition-colors">
                          <UserCircle className="w-4 h-4 mr-2" />
                          Profile
                        </Link>
                        <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-white/10 transition-colors">
                          <Settings className="w-4 h-4 mr-2" />
                          Settings
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 hover:bg-white/10 transition-colors text-red-400"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-2">
                  <Link to="/login">
                    <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm hover:bg-white/10 transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-semibold">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - ALL LINKS HERE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors
                      ${location.pathname === link.to 
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="flex-1">{link.label}</span>
                  </Link>
                ))}
                
                {!user ? (
                  <div className="pt-3 space-y-2">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-white/5 rounded-lg text-center">
                        Login
                      </button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center font-semibold">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="pt-3 space-y-2">
                    <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-white/5 rounded-lg text-center flex items-center justify-center space-x-2">
                        <UserCircle className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                    </Link>
                    <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)}>
                      <button className="w-full px-4 py-3 bg-white/5 rounded-lg text-center flex items-center justify-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-center text-red-400 flex items-center justify-center space-x-2"
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

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-start justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              className="w-full max-w-lg md:max-w-2xl mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search courses, lessons, or topics..."
                    className="flex-1 bg-transparent outline-none text-white text-sm md:text-base"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)} className="p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400">Popular searches:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-white/5 rounded-lg text-xs">React</span>
                    <span className="px-2 py-1 bg-white/5 rounded-lg text-xs">Machine Learning</span>
                    <span className="px-2 py-1 bg-white/5 rounded-lg text-xs">UI/UX Design</span>
                  </div>
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