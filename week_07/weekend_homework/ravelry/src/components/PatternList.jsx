import { motion } from "framer-motion";
import Pattern from "./Pattern";
import styled from "styled-components";

const StyledList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  list-style: none;
`;

export default function PatternList({ patterns }) {
  if (patterns) {
    const patternCards = patterns.map((pattern) => (
      <Pattern key={pattern.id} pattern={pattern} />
    ));

    return (
      <StyledList
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        {patternCards}
      </StyledList>
    );
  }
}
