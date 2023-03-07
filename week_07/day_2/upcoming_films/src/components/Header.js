import filmLogo from "./film.png";

function Header() {
  return (
    <header>
      <img src={filmLogo} alt="clapperboard icon" />
      <h2>Upcoming Film Releases</h2>
      <img src={filmLogo} alt="clapperboard icon" />
    </header>
  );
}

export default Header;
