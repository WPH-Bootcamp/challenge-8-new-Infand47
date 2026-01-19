import { Header } from "./components/Header";
import Hero from "./components/HeroSection/Hero";

function App() {
  const movie = {
    id: 1,
    title: "",
    original_title: "",
    overview: "",
    poster_path: "",
    backdrop_path: "",
    release_date: "",
    vote_average: 0,
    popularity: 0,
    vote_count: 0,
  };

  return (
    <>
      <Header />
      <Hero movie={movie} />
    </>
  );
}

export default App;
