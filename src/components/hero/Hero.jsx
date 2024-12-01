import React from "react";
import "./hero.scss";
import { animate, motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }
    }
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-200%',
      transition: {
        repeat: Infinity,
        repeatType:'mirror',
        duration: 20,
      },
    }
  }
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>RAHUL BHAGAT</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="scroll.png" variants={textVariants} animate="scrollButton"></motion.img>
        </motion.div>
        
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
          clean code, scalability, and user-centric design
        </motion.div>
        <div className="imageContainer">
          <img className="heroImg" src="hero.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
