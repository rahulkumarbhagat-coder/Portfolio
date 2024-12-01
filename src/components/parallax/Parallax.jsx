import { useScroll, useTransform, motion } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

const Parallax = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    
    const yText = useTransform(scrollYProgress,[0,1],['0%','500%'])
    const yBg = useTransform(scrollYProgress,[0,1],['0%','100%'])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #0c0c1d, #111132)"
            : "linear-gradient(180deg, #0c0c1d, #505064)",
      }}
    >
      <motion.h1 style={{y:yText}}>{type === "about" ? "My Skills" : "My Projects"}</motion.h1>
      <motion.div style={{y:yBg}} className="mountains"></motion.div>
      <motion.div style={{y:yBg, backgroundImage: `url(${type==='about'?'/planets.png':'/sun.png'})`}} className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
