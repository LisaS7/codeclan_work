import "./Pattern.css";

export default function Pattern({ pattern }) {
  return (
    <li className="pattern-card">
      <h2>{pattern.name}</h2>
      <img src={pattern.photos[0].small2_url} alt="pattern"></img>
      <a href={`https://www.ravelry.com/patterns/library/${pattern.permalink}`}>
        View on Ravelry
      </a>
    </li>
  );
}
