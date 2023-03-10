import Pattern from "./Pattern";

export default function PatternList({ patterns }) {
  if (patterns) {
    const patternCards = patterns.map((pattern) => (
      <Pattern key={pattern.id} pattern={pattern} />
    ));

    return <ul>{patternCards}</ul>;
  } else {
    return <p>Loading...</p>;
  }
}
