import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, Download, Brain, User, Settings,
  TrendingUp, Award, Calendar, HelpCircle, LogOut, Star
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/courses', icon: BookOpen, label: 'Courses' },
    { to: '/offline', icon: Download, label: 'Offline Learning' },
    { to: '/ai-assistant', icon: Brain, label: 'AI Assistant' },
    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ];

  const quickStats = [
    { icon: TrendingUp, value: '15', label: 'Day Streak', color: 'orange' },
    { icon: Award, value: '8', label: 'Achievements', color: 'purple' },
    { icon: Star, value: '127h', label: 'Learned', color: 'blue' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 20 }}
        className={`fixed left-0 top-0 h-full w-72 glass border-r border-white/10 z-50
          ${isOpen ? 'block' : 'hidden lg:block'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <div>
                <span className="text-xl font-bold gradient-text">SmartLearn</span>
                <p className="text-xs text-gray-400">Offline Learning</p>
              </div>
            </div>
          </div>

          {/* User Info */}
          {user && (
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{user.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="flex-1">{item.label}</span>
                {item.to === '/offline' && (
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </NavLink>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 border-t border-white/10">
            <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Quick Stats</h4>
            <div className="space-y-3">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`p-1.5 rounded-lg bg-${stat.color}-500/20`}>
                      <stat.icon className={`w-3 h-3 text-${stat.color}-400`} />
                    </div>
                    <span className="text-sm text-gray-300">{stat.label}</span>
                  </div>
                  <span className="font-semibold text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help Center
              </Button>
              {user && (
                <Button variant="ghost" size="sm" className="w-full text-red-400 hover:text-red-300" onClick={logout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;