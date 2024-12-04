import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I prefer working with frameworks like
          <br /> React for flexibility
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvwiyey4wyuw9liu4ejm5.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Building</motion.b> Reusable
          </h1>
        </div>
        <div className="title">
          <h1>
            UI <motion.b whileHover={{color:"orange"}}>Components</motion.b>
          </h1>
          <button>WHAT I Learned?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Framework</h2>
          <p>
          I use React to build dynamic UIs, like in Text Tools and the Weather App, with reusable components for a smooth user experience.
          </p>
          <button>React Js</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>For Animations</h2>
          <p>
          I used Framer Motion for smooth animations and interactive transitions, enhancing the overall UI.
          </p>
          <button>Framer-Motion</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Language</h2>
          <p>
          JavaScript powers the functionality of my apps, from text transformations in Text Tools to live data fetching in the Weather App.
          </p>
          <button>Javascript</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tech-Stack</h2>
          <p>
          I built JustNoteIt using the MERN stack to create a full-stack note-taking app with seamless integration between the frontend and backend.
          </p>
          <button>MERN Stack</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;