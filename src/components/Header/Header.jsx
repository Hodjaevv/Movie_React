import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex fixed container px-20 z-10 bg-[#0c0c39] py-4 text-white items-center justify-between">
      <Link to={"/"} className="uppercase font-extrabold">Movie app</Link>
      <ul className="flex space-x-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movie"}>Movie</Link>
        </li>
        <li>
          <Link to={"/tv"}>Tv</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
