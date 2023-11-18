import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css"
import "./assets/tailwind.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesDet from "./pages/MoviesDet.jsx";
import MoviesList from "./pages/MoviesList.jsx";
import Search from "./pages/Search.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MoviesNotFound from "./pages/MoviesNotFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesList apiPath="movie/now_playing" />,
  },
  {
    path: "/Search",
    element: <Search apiPath="search/movie" />,
  },
  {
    path: "/*",
    element: <MoviesNotFound />,
  },
  {
    path: "/movies/:id",
    element: <MoviesDet />,
  },
  {
    path: "/movies/top",
    element: <MoviesList apiPath="movie/top_rated" />,
  },
  {
    path: "/movies/popular",
    element: <MoviesList apiPath="movie/popular" />,
  },
  {
    path: "/movies/upcoming",
    element: <MoviesList apiPath="movie/upcoming" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black">
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </React.StrictMode>
  </div>
);
