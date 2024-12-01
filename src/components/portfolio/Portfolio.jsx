import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "JustNoteIt (Full-Stack Project)",
    img: "https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A full-stack note-taking app combining a React frontend with a Node.js backend. It allows users to create, edit, and manage notes, providing a seamless user experience with efficient data handling.",
  },
  {
    id: 2,
    title: "Open-Source Contributions",
    img: "https://cdn.dribbble.com/users/904433/screenshots/4315494/media/5c3d901720873cb26fdc37846507cc5a.png?resize=400x300&vertical=center",
    desc: "In DrawDB, I contributed by adding multi-language support to make the platform more accessible. I also improved the frontend design, focusing on enhancing usability and providing a better overall user experience.",
  },
  {
    id: 3,
    title: "News App",
    img: "https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A React app that delivers the latest news from various categories. It includes features like infinite scrolling, a top loading bar for navigation feedback, and smooth transitions powered by React Router",
  },
  {
    id: 4,
    title: "Text Tools",
    img: "https://kinsta.com/wp-content/uploads/2019/01/best-text-editors.png",
    desc: "A React-based text utility app that allows users to convert text to uppercase, lowercase, remove spaces, copy, and clear text. It features a dark mode for improved accessibility and a clean, simple user interface.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100,100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img}></img>
        </div>

        <motion.div className="textContainer" style={{ y }}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <a href="https://github.com/rahulkumarbhagat-coder?tab=repositories"><button>See on github</button></a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
