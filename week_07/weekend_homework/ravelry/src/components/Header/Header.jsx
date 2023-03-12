import styled from "styled-components";
import background from "./header.jpeg";
import { motion } from "framer-motion";

const StyledHeader = styled(motion.header)`
  background-image: url(${background});
  background-position: center;
  padding: 2rem;
  font-family: "Kalam", cursive;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h1`
  background: rgb(0, 0, 0, 0.5);
  border-radius: 100px;
  margin: 1rem;
  padding: 1rem 4rem;
`;

const H1 = styled(StyledHeading)`
  font-size: 3rem;
`;

const H3 = styled(StyledHeading)`
  font-size: 1.5rem;
`;

const headerVariant = {
  initial: { y: "-50vh" },
  animate: { y: 0, transition: { duration: 2, delay: 3 } },
};

export default function Header() {
  return (
    <StyledHeader variants={headerVariant} initial="initial" animate="animate">
      <H1>Ravelry Patterns</H1>
      <H3>Search for top patterns by craft and theme</H3>
    </StyledHeader>
  );
}
