import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
//9dd902b52756efb64c1970b9c817d931
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US&page=1`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) return setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list ">
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true}>
        {movies &&
          movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
