import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 3rem;
  background-color: ${({ theme }) => theme.colours.background};
`;

export default function Categories({ options, setValue }) {
  function changeQuery(query) {
    setValue(query);
  }

  const categoryButtons = options.map((word, index) => (
    <motion.button
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 10px pink",
        transition: { duration: 0.5 },
      }}
      whileTap={{ backgroundColor: "#1c1e27", border: "2px solid pink" }}
      key={index}
      onClick={() => changeQuery(word)}
    >
      {word}
    </motion.button>
  ));
  return <Nav>{categoryButtons}</Nav>;
}
