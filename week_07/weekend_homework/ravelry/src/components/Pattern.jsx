import { motion } from "framer-motion";
import styled from "styled-components";

const PatternCard = styled(motion.li)`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colours.cardBackground};
  box-shadow: 0 0 20px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const PatternHead = styled.h2`
  margin: 1rem 0 0.5rem 0.5rem;
  color: white;
  font-size: 1.3rem;
  height: 4rem;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 20rem;
  height: 20rem;
`;

const ButtonLink = styled.a`
  font-size: 0.8rem;
`;

export default function Pattern({ pattern }) {
  return (
    <PatternCard
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 15px orange",
        transition: { duration: 0.5 },
      }}
    >
      <PatternHead>{pattern.name}</PatternHead>
      <Image src={pattern.photos[0].small2_url} alt="pattern" />
      <ButtonLink
        href={`https://www.ravelry.com/patterns/library/${pattern.permalink}`}
      >
        <button>View on Ravelry</button>
      </ButtonLink>
    </PatternCard>
  );
}
