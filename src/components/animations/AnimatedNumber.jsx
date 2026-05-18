import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const AnimatedNumber = ({ value, format = (v) => v, duration = 0.5 }) => {
  const spring = useSpring(0, { 
    stiffness: 100, 
    damping: 30,
    duration: duration * 1000
  });
  
  const display = useTransform(spring, (current) => format(Math.floor(current)));

  React.useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

export default AnimatedNumber;