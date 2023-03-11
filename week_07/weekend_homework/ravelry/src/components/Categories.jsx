import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colours.background};
`;

const Button = styled(motion.button)``;

export default function Categories({ options, current, setValue }) {
  const categoryButtons = options.map((word, index) => {
    return (
      <Button
        whileHover={{
          scale: 1.2,
          boxShadow: "0 0 10px pink",
          transition: { duration: 0.5 },
        }}
        whileTap={{ backgroundColor: "#1c1e27", border: "2px solid pink" }}
        key={index}
        onClick={(e) => {
          setValue(word);
          console.log("current", current);
          console.log("word", word);
          current === word
            ? (e.target.style.backgroundColor = "green")
            : (e.target.style.backgroundColor = "blue");
        }}
      >
        {word}
      </Button>
    );
  });
  return <Nav>{categoryButtons}</Nav>;
}
