import { motion } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colours.background};
`;

const Button = styled(motion.button)``;
const SelectedButton = styled(motion.button)`
  background-color: green;
`;

const buttonVariants = {
  hover: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.75, repeat: Infinity },
  },
  tap: {
    backgroundColor: "#1c1e27",
    border: "2px solid pink",
  },
};

function createButtons(options, current, setValue) {
  const categoryButtons = options.map((word, index) => {
    if (current === word) {
      return (
        <SelectedButton
          key={index}
          onClick={() => {
            setValue(word);
          }}
        >
          {word}
        </SelectedButton>
      );
    } else {
      return (
        <Button
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          key={index}
          onClick={() => {
            setValue(word);
          }}
        >
          {word}
        </Button>
      );
    }
  });
  return categoryButtons;
}

export default function Categories({ options, current, setValue }) {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    setButtons(createButtons(options, current, setValue));
  }, [current]);
  return <Nav>{buttons}</Nav>;
}
