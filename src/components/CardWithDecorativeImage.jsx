import { Link } from "react-router-dom";

export default function CardWithDecorativeImage({ movie }) {
  const MoviesImages = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-950 dark:border-gray-700">
      <Link to={`/movies/${movie.id}`}>
        <img class="rounded-t-lg" src={MoviesImages} alt="" />
      </Link>
      <div class="p-5">
        <Link to={`/movies/${movie.id}`}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
