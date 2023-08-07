import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Movie, SingleMovie, Tv, SingleTv } from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/tv" element={<Tv />} />
        <Route exact path="/single-movie/:singleId" element={<SingleMovie />} />
        <Route exact path="/tv/:id" element={<SingleTv />} />
      </Routes>
    </Router>
  );
}

export default App;
