import React from 'react';
import { motion } from 'framer-motion';

const Skeleton = ({ className = '', variant = 'rect' }) => {
  const variants = {
    rect: 'rounded-lg',
    circle: 'rounded-full',
    text: 'rounded'
  };

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      className={`bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shimmer ${variants[variant]} ${className}`}
    />
  );
};

export const SkeletonCard = () => {
  return (
    <div className="glass rounded-2xl p-4">
      <Skeleton className="w-full h-48 mb-4" />
      <Skeleton className="w-3/4 h-4 mb-2" />
      <Skeleton className="w-1/2 h-4 mb-4" />
      <Skeleton className="w-full h-10" />
    </div>
  );
};

export const SkeletonText = ({ lines = 3 }) => {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <Skeleton key={i} className={`h-4 ${i === 0 ? 'w-3/4' : 'w-full'}`} />
      ))}
    </div>
  );
};

export default Skeleton;