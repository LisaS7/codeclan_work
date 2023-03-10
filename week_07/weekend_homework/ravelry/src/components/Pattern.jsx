import "./Pattern.css";
import { motion } from "framer-motion";

export default function Pattern({ pattern }) {
  return (
    <motion.li
      className="pattern-card"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 20px hotpink",
        transition: { duration: 0.5 },
      }}
    >
      <h2>{pattern.name}</h2>
      <img src={pattern.photos[0].small2_url} alt="pattern"></img>
      <a href={`https://www.ravelry.com/patterns/library/${pattern.permalink}`}>
        <button>View on Ravelry</button>
      </a>
    </motion.li>
  );
}
