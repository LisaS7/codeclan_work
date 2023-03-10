import { motion } from "framer-motion";
import yarn from "./yarn-ball.png";
import "./Loading.css";

export default function Loading() {
  return (
    <>
      <motion.h2
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Page is loading
      </motion.h2>
      <motion.img
        className="loading-ball"
        src={yarn}
        alt="yarn ball"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />
    </>
  );
}
