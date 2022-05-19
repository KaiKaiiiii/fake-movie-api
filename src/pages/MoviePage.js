import React, { useEffect, useState } from "react";

import useSWR from "swr";
import MovieCard from "../components/Movie/MovieCard";
import { fetcher } from "../config";
import useDebounce from "../hook/useDebounce";
import ReactPaginate from "react-paginate";

const MoviePage = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US&page=1`
  );
  const filterDebounce = useDebounce(search, 1000);

  function handleChange(e) {
    setSearch(e.target.value);
  }
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US&page=${pageNumber}&include_adult=false&query=${search}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US&page=${pageNumber}`
      );
      console.log(data);
    }
  }, [data, filterDebounce, pageNumber, search]);

  const loading = !data && !error;

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  useEffect(() => {
    if (!data || !data.total_pages) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [itemsPerPage, itemOffset, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_pages;
    setItemOffset(newOffset);
    setPageNumber(event.selected + 1);
  };
  return (
    <div className="page-container">
      <div className="flex items-center justify-center mb-10 rounded-md overflow-hidden">
        <input
          type="text"
          className="w-full flex-1 px-2 py-4  outline-none"
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button className="px-2 py-4 bg-pink-500 text-white font-semibold ">
          Search movie
        </button>
      </div>
      {loading && (
        <div className="mx-auto w-8 h-8 rounded-full border-blue-500 border-4 border-t-transparent border-t-4 animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => {
            return <MovieCard item={item} key={item.id}></MovieCard>;
          })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="paginate"
      />
    </div>
  );
};

export default MoviePage;
