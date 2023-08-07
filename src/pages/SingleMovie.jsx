import { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { singleId } = useParams();
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${singleId}`, {
        params: {
          api_key: "8fa5019b1dd77591ce7f69a2a218aef8",
        },
      })
      .then((res) => res)
      .then((data) =>
        setState({
          isFetched: true,
          data: data.data,
          error: false,
        }),
      )
      .catch((err) => console.log(err));
  }, []);
  console.log(state.data, "malumot");
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.backdrop_path})`,
      }}
      className=" container mx-auto flex gap-5 px-[8%] py-[10%]"
    >
      {state.isFetched ? (
        <>
          <div>
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${state.data.poster_path}`}
              alt=""
            />
            <h1>Title - {state.data.title}</h1>
          </div>
          <div  className="w-[700px]">
            <h2>{state.data.overview}</h2>
            <p>Runtime: {state.data.runtime}</p>
            <p>Status: {state.data.status}</p>
          </div>
        </>
      ) : (
        <>
          <h1>loading...</h1>
        </>
      )}
    </div>
  );
};

export default SingleMovie;
