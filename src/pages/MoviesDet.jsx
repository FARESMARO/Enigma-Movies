import React, { useEffect, useState } from "react";
import img from "../assets/hh.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Style/Style.css";

export default function MoviesDet() {
  const [Movies, setMovies] = useState([]);
  const params = useParams();
  console.log(params.id);
  const MoviesImages = `http://image.tmdb.org/t/p/w500/${Movies.poster_path}`;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=05954ce013db039af9150e8e6e66f260`
      )
      .then((res) => {
        setMovies(res.data);
      });
  }, []);

  return (
    <main className="container">
      <div className="img-cont">
        <img src={MoviesImages} alt={Movies.title} className="img" />
      </div>
      <div className="title-cont ">
        <h2 className="title">{Movies.title}</h2>
        <p className="Overview">{Movies.overview}</p>
        {Movies.genres ? (
          <>
            {Movies.genres.map((genre) => {
              return (
                <span className="genre" key={genre.id}>
                  {genre.name}
                </span>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      <div className="info-cont">
        <p className="text-white">Release Date: {Movies.release_date}</p>
        <p className="text-white">Rating: {Movies.vote_average}/10</p>
        <span className="text-white">Time:{Movies.runtime}min</span>
      </div>
    </main>
  );
}
