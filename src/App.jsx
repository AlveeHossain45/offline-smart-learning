import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Courses from './pages/Courses/Courses';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Offline from './pages/Offline/Offline';
import AIAssistant from './pages/AI/AIAssistant';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen"
      >
        <Navbar />
        <main className="pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/offline" element={<Offline />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;