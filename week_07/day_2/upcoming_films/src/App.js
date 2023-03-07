import "./App.css";
import FilmBox from "./containers/FilmBox";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FilmBox />
      <Footer />
    </div>
  );
}

export default App;
