import { motion } from "framer-motion";
import yarn from "./yarn-ball.png";
import styled from "styled-components";

const LoadingText = styled(motion.h2)`
  color: white;
  font-size: 3rem;
`;

const LoadingBall = styled(motion.img)`
  margin-top: 3.5rem;
  width: 9rem;
  height: 9rem;
`;

export default function Loading() {
  return (
    <>
      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Fetching patterns
      </LoadingText>
      <LoadingBall
        src={yarn}
        alt="yarn ball"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      />
    </>
  );
}
