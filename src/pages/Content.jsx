import React from 'react';
import { motion } from 'framer-motion'

export default function Content() {
  const objectAnimation = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: 0.6 + index*0.1, duration: 0.5 },
    }),
    exit: { 
      opacity: 0.7,
      transition: { duration: 0.5 },
    },
  };

  const arrayImgs = ['wallpaper-01', 'wallpaper-02', 'wallpaper-03', 'wallpaper-04'];

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
      className="content">
        <div className="content-imgs">
          {
            arrayImgs.map((link, index) => (
              <motion.img
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={objectAnimation}
                custom={index}
                src={require(`../images/${link}.jpg`)}
                alt="Mar"
              />
            ))
          }
       </div>
      <div className="title">
        <h1>
          Content
        </h1>
    </div>
  </motion.div>
  );
}