import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import { EmailJSResponseStatus } from "@emailjs/browser";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact__form" element={<ContactForm />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:imdbID" element={<MovieDetails />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
