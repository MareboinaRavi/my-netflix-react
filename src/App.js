import "./App.css";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import requests from "./requests";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="MOVIES COMEDY" fetchUrl={requests.fetchComedy} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomance} />
      <Row title="DOCUMENTRY MOVIES" fetchUrl={requests.fetchDocs} />
    </div>
  );
}

export default App;
