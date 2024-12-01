import { motion,stagger } from "framer-motion";
import React from "react";

const LInks = () => {

  const variants = {
    open:{
      transition:{
        staggerChildren:0.1
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    }
  }

  const itemVariants = {
    open:{
     y:0,
     opacity:1
    },
    closed:{
      y:50,
      opacity:0
    }
  }

  const items = ["Homepage", "Skills", "Projects", "Contact"];

  return <motion.div className="links" variants={variants}>
    {items.map((item)=>{
      return <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.90}}>{item}</motion.a>
    })}
  </motion.div>;
};

export default LInks;
