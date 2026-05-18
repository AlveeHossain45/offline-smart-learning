import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress, height = 'h-2', color = 'gradient', showLabel = false, label }) => {
  const colors = {
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500'
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span>{label || 'Progress'}</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-white/10 rounded-full ${height} overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${colors[color]} ${height} rounded-full relative`}
        >
          {progress > 0 && (
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;