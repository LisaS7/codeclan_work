import { motion } from "framer-motion";
import Pattern from "./Pattern";
import "./PatternList.css";

export default function PatternList({ patterns }) {
  if (patterns) {
    const patternCards = patterns.map((pattern) => (
      <Pattern key={pattern.id} pattern={pattern} />
    ));

    return (
      <motion.ul
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        {patternCards}
      </motion.ul>
    );
  }
}
