import styled from "styled-components";
import { constants } from "../constants/Constants";
import Categories from "../components/Categories";

const Container = styled.section`
  padding: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function ButtonBox({ setCraft, setCategory }) {
  return (
    <Container>
      <Categories options={constants.craftList} setValue={setCraft} />
      <Categories options={constants.categoryList} setValue={setCategory} />
    </Container>
  );
}
