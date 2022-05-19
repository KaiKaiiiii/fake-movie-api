import React from "react";
import MovieList from "../components/Movie/MovieList";

const HomePage = () => {
  return (
    <div>
      <section className="movie-layout page-container mb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold object">
          Now playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="movie-layout page-container mb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movie-layout page-container mb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </div>
  );
};

export default HomePage;
