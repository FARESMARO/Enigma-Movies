import CardWithDecorativeImage from "../components/CardWithDecorativeImage";
import useFatch from "../hooks/useFatch";

export default function MoviesList({ apiPath, id }) {
  const { Data: Movies, Loading, error } = useFatch(apiPath);

  return (
    <main className="flex gap-3 p-8 flex-wrap justify-center">
      {Loading ||
        Movies.map((movie) => {
          return (
            <CardWithDecorativeImage key={movie.id} movie={movie} id={id} />
          );
        })}
      {error && <h1 className="text-white text-2xl ">404 Error</h1>}
    </main>
  );
}
