import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import useSWR from "swr";
import MovieCard from "../components/Movie/MovieCard";
import { fetcher } from "../config";
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US`,
    fetcher
  );

  if (!data) return null;
  const { backdrop_path, poster_path, title, overview, genres } = data;
  return (
    <div className="py-10 text-white">
      <div className="relative w-full h-[600px] mb-60">
        <div className="absolute inset-0 opacity-70 bg-black"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
        <div className="w-3/4 h-[400px] rounded-md  absolute mx-auto -translate-y-2/4 left-2/4 -translate-x-2/4">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold  mb-10">{title}</h1>
      <p className="text-center text-xl max-w-[700px] mx-auto font-semibold mb-10">
        {overview}
      </p>
      <div className="flex items-center justify-center gap-x-10 mb-10">
        {genres.length > 0 &&
          genres.map((item) => {
            return (
              <span
                className="py-2 px-4  border-pink-500 border-2 rounded-md text-pink-500"
                key={item.id}
              >
                {item.name}
              </span>
            );
          })}
      </div>
      <MovieCredits></MovieCredits>
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="flex justify-center items-center gap-x-5 mb-20">
      {cast.slice(0, 4).map((item) => {
        return (
          <div className="flex flex-col gap-y-3 w-1/4 h-[500px]" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="text-xl text-pink-500 font-semibold">
              {item.original_name}
            </p>
            <span className="text-sm opacity-50">{item.character}</span>
          </div>
        );
      })}
    </div>
  );
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
}

function MovieVideo() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      {results.slice(0, 2).map((item) => {
        return (
          <div className="mb-10" key={item.id}>
            <h4 className="text-orange-500 border-2 border-orange-500 inline-block px-4 py-2 mb-5">
              {item.name}
            </h4>
            <iframe
              width="753"
              height="1000"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full "
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  return (
    <div className="movie-list ">
      <h2 className="text-2xl font-semibold mb-5">Similar movies</h2>
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true}>
        {results &&
          results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
export default MovieDetailPage;
