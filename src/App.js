import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movie-details" element={<MovieDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
