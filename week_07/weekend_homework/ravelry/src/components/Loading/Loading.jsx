import { motion } from "framer-motion";
import yarn from "./yarn-ball.png";
import styled from "styled-components";

const LoadingText = styled(motion.h2)`
  margin-top: 5rem;
  color: white;
  font-size: 3rem;
`;

const LoadingBall = styled(motion.img)`
  margin-top: 3.5rem;
  width: 9rem;
  height: 9rem;
`;

const textVariant = {
  animate: {
    opacity: [0, 1, 0],
    transition: { duration: 1, repeat: Infinity },
  },
};

const ballVariant = {
  animate: {
    rotate: 360,
    transition: { duration: 1.75, repeat: Infinity, delay: 0.75 },
  },
};

export default function Loading() {
  return (
    <>
      <LoadingText animate="animate" variants={textVariant}>
        Fetching patterns
      </LoadingText>
      <LoadingBall
        src={yarn}
        alt="yarn ball"
        animate="animate"
        variants={ballVariant}
      />
    </>
  );
}
