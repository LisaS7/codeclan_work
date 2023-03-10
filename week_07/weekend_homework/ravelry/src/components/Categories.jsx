export default function Categories({ category, setCategory }) {
  const categoryOptions = ["Halloween", "Christmas", "Valentine's Day"];
  function changeQuery(query) {
    setCategory(query);
  }

  const categoryButtons = categoryOptions.map((word, index) => (
    <button key={index} onClick={() => changeQuery(word)}>
      {word}
    </button>
  ));
  return <nav>{categoryButtons}</nav>;
}
