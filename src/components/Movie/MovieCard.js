import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white flex flex-col">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-xl mb-3 font-bold">{item.title}</h3>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between text-sm opacity-50 mb-10 ">
          <span>{new Date(item.release_date).getFullYear()}</span>
          <span>{item.vote_average}</span>
        </div>
        <button
          onClick={() => navigate(`/movie/${item.id}`)}
          className="py-4 px-6 bg-pink-500 rounded-lg w-full mt-auto"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
