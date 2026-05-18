import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const StatsCard = ({ icon: Icon, label, value, change, color = 'blue', trend = 'up' }) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 bg-gradient-to-r ${colors[color]} rounded-xl shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold gradient-text">{value}</div>
            <div className={`text-xs ${trend === 'up' ? 'text-green-400' : 'text-red-400'} flex items-center`}>
              {trend === 'up' ? '↑' : '↓'} {change}
            </div>
          </div>
        </div>
        <h3 className="text-gray-400 text-sm">{label}</h3>
      </Card>
    </motion.div>
  );
};

export default StatsCard;