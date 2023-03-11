import styled from "styled-components";
import { constants } from "../Constants";
import Categories from "../components/Categories";

export default function ButtonBox({ setCraft, setCategory }) {
  const Container = styled.section`
    padding: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `;

  return (
    <Container>
      <Categories options={constants.craftList} setValue={setCraft} />
      <Categories options={constants.categoryList} setValue={setCategory} />
    </Container>
  );
}
