import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, onClick }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={`glass rounded-2xl overflow-hidden ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;