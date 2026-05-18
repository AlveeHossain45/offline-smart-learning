import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Download, Award, BookOpen, CheckCircle, Clock } from 'lucide-react';
import Badge from '../ui/Badge';

const ActivityItem = ({ activity, time, type, details }) => {
  const icons = {
    lesson: PlayCircle,
    download: Download,
    achievement: Award,
    course: BookOpen,
    quiz: CheckCircle
  };

  const Icon = icons[type] || Clock;
  
  const colors = {
    lesson: 'text-blue-400 bg-blue-500/20',
    download: 'text-green-400 bg-green-500/20',
    achievement: 'text-purple-400 bg-purple-500/20',
    course: 'text-orange-400 bg-orange-500/20',
    quiz: 'text-yellow-400 bg-yellow-500/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 5 }}
      className="flex items-center space-x-3 p-4 glass rounded-xl hover:bg-white/5 transition-all"
    >
      <div className={`p-2 rounded-lg ${colors[type]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{activity}</p>
        {details && <p className="text-xs text-gray-500">{details}</p>}
      </div>
      <div className="text-right">
        <Badge variant="primary" size="sm">{time}</Badge>
      </div>
    </motion.div>
  );
};

export default ActivityItem;