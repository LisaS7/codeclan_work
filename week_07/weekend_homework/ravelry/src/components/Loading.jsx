import { motion } from "framer-motion";
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
    </>
  );
}
