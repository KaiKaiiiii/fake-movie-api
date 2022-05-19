import { Fragment, lazy, Suspense } from "react";

import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailPage from "./pages/MovieDetailPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
