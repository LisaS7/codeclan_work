import "./Categories.css";

export default function Categories({ options, setValue }) {
  function changeQuery(query) {
    setValue(query);
  }

  const categoryButtons = options.map((word, index) => (
    <button key={index} onClick={() => changeQuery(word)}>
      {word}
    </button>
  ));
  return <nav>{categoryButtons}</nav>;
}
