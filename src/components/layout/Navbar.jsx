import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Bell, Search, LogOut, Settings, UserCircle, ChevronDown, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme, useAuth } from '../../main.jsx';

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg"
                style={{ background: 'var(--accent-purple)', color: 'white' }}
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
                    color: location.pathname === link.to ? 'var(--accent-purple)' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.color = 'var(--accent-purple)';
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
            <div className="flex items-center gap-3">
              {/* Search */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl transition-all"
                style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                <Search className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              </motion.button>
              
              {/* Notifications */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl transition-all relative"
                style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                <Bell className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                <span 
                  className="absolute top-1 right-1 w-2 h-2 rounded-full animate-pulse"
                  style={{ background: 'var(--accent-purple)' }}
                />
              </motion.button>

              {/* Premium Sun/Moon Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl transition-all"
                style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}
              >
                {darkMode ? 
                  <Sun className="w-4 h-4" style={{ color: 'var(--accent-purple)' }} /> : 
                  <Moon className="w-4 h-4" style={{ color: 'var(--accent-purple)' }} />
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
                      style={{ background: 'var(--accent-purple)' }}
                    >
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium hidden xl:inline" style={{ color: 'var(--text-primary)' }}>
                      {user.name?.split(' ')[0] || 'User'}
                    </span>
                    <motion.div
                      animate={{ rotate: isProfileOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 rounded-2xl overflow-hidden"
                        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(79, 70, 229, 0.1)' }}
                      >
                        <div className="p-4 border-b" style={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}>
                          <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{user.name}</p>
                          <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{user.email}</p>
                        </div>
                        <div className="p-2">
                          <Link to="/profile" onClick={() => setIsProfileOpen(false)}>
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all"
                            >
                              <UserCircle className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Profile</span>
                            </motion.div>
                          </Link>
                          <Link to="/settings" onClick={() => setIsProfileOpen(false)}>
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all"
                            >
                              <Settings className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
                              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>Settings</span>
                            </motion.div>
                          </Link>
                          <div className="h-px my-2" style={{ background: 'rgba(79, 70, 229, 0.1)' }} />
                          <motion.button 
                            whileHover={{ x: 5 }}
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all"
                            style={{ color: '#EF4444' }}
                          >
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm">Logout</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <Link to="/login">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 rounded-xl text-sm font-medium btn-outline"
                    >
                      Login
                    </motion.button>
                  </Link>
                  <Link to="/register">
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-xl text-sm font-semibold btn-primary"
                    >
                      Sign Up
                    </motion.button>
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
                  <X className="w-5 h-5" style={{ color: 'var(--accent-purple)' }} /> : 
                  <Menu className="w-5 h-5" style={{ color: 'var(--accent-purple)' }} />
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
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t"
              style={{ background: 'var(--bg-card)', borderColor: 'rgba(79, 70, 229, 0.1)' }}
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl transition-all"
                    style={{
                      color: location.pathname === link.to ? 'var(--accent-purple)' : 'var(--text-secondary)',
                    }}
                  >
                    <span className="flex-1 font-medium">{link.label}</span>
                    {location.pathname === link.to && (
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-purple)' }} />
                    )}
                  </Link>
                ))}
                
                {/* Dark mode toggle in mobile */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={toggleDarkMode}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  <div className="w-10 h-5 rounded-full transition-all relative" style={{ background: 'var(--accent-purple)' }}>
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-white shadow-md absolute top-0.5"
                      animate={{ x: darkMode ? 20 : 2 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    />
                  </div>
                </motion.button>
                
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
                      style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}
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
            className="fixed inset-0 z-50 flex items-start justify-center p-4"
            style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(16px)' }}
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: -30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: -30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="w-full max-w-2xl mt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl p-5" style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-lg)' }}>
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5" style={{ color: 'var(--accent-purple)' }} />
                  <input
                    type="text"
                    placeholder="Search courses, lessons, or topics..."
                    className="flex-1 bg-transparent outline-none luxury-input"
                    autoFocus
                  />
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSearchOpen(false)} 
                    className="p-1 rounded-lg transition-all"
                  >
                    <X className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                  </motion.button>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(79, 70, 229, 0.1)' }}>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>✨ Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {['React Development', 'Machine Learning', 'UI/UX Design', 'Python', 'Cloud Computing'].map((term) => (
                      <motion.span 
                        key={term} 
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-lg text-xs cursor-pointer transition-all"
                        style={{ background: 'var(--bg-primary)', color: 'var(--text-secondary)' }}
                      >
                        {term}
                      </motion.span>
                    ))}
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