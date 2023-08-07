import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";

const Movie = () => {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "8fa5019b1dd77591ce7f69a2a218aef8",
        },
      })
      .then((res) => res)
      .then((data) => {
        setState({
          isFetched: true,
          data: data.data.results,
          error: false,
        }).catch((err) => {
          setState({
            isFetched: true,
            data: [],
            error: err.message,
          });
        });
      });
  }, []);
  return (
    <div className="movie_container container mx-auto flex flex-wrap gap-[5.3%] px-[8%] py-[10%]">
      {state?.data?.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          data={movie.release_date}
          img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default Movie;