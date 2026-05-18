import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ children, content, position = 'top', delay = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId;

  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrows = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-gray-900',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-gray-900'
  };

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: position === 'top' ? 10 : position === 'bottom' ? -10 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute z-50 ${positions[position]} whitespace-nowrap`}
          >
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-700">
              {content}
              <div className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${arrows[position]}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;