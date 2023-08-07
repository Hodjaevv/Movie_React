import { Link } from "react-router-dom";

const MovieCard = ({ title, rating, data, img, id }) => {
  return (
    <Link className="w-[200px]" to={`/single-movie/${id}`}>
      <div className="relative mb-8">
        <img className="img2" src={img} alt="" />
        <h2 className="w-[80%]">{title}</h2>
        <span className="absolute right-0 top-0 rounded-bl-lg bg-blue-950 p-2 text-white">
          {rating}
        </span>
        <span>{data}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
