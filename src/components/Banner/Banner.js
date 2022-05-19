import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US&page=1`,
    fetcher
  );
  const movies = data?.results || [];
  // console.log(data);
  return (
    <Swiper grabCursor={true} slidesPerView={"auto"}>
      {movies &&
        movies.length > 0 &&
        movies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

const BannerItem = ({ item }) => {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US`,
    fetcher
  );
  if (!data) return null;
  const { genres } = data;

  return (
    <section className="banner h-[500px] page-container  mb-20">
      <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-full object-cover "
        />
        <div className="content absolute bottom-5 left-5 text-white">
          <h2 className="font-bold text-3xl mb-6">{title}</h2>
          <div className="flex items-center gap-x-5 mb-6">
            {genres.length > 0 &&
              genres.map((item) => {
                return (
                  <span
                    className="px-4 py-1 border-2 border-white rounded-md"
                    key={item.id}
                  >
                    {item.name}
                  </span>
                );
              })}
          </div>
          <button
            className="px-4 py-3 bg-pink-500 rounded-md font-semibold"
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            Watch now
          </button>
        </div>
      </div>
    </section>
  );
};
export default Banner;
