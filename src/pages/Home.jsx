import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return(
    <motion.div
      initial={{
        opacity: 0.7,
      }}
      animate={{ 
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5 }
      }}
      exit={{
        opacity: 0.7,
        transition: { duration: 0.5 },
      }}
      className="home">
      <img
        src={require('../images/por-do-sol.jpg')}
        alt="sol se pondo no mar"
      />
      <div className="title">
        <h1>
          Home
        </h1>
      </div>
    </motion.div>
  );
}