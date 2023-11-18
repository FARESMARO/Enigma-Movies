import React from "react";
import CardWithDecorativeImage from "../components/CardWithDecorativeImage";
import useFatch from "../hooks/useFatch";
import { useSearchParams } from "react-router-dom";

export default function Search({ apiPath, id }) {
  let [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { Data: Movies } = useFatch(apiPath, queryTerm);

  return (
    <main className="flex gap-3 p-8 flex-wrap justify-center">
      <p className="text-white ">
        {Movies.length === 0 ? (
          <h5>undefined: {queryTerm}</h5>
        ) : (
          <h5>resulte: {queryTerm}</h5>
        )}
      </p>
      {Movies.map((movie) => {
        return <CardWithDecorativeImage key={movie.id} movie={movie} id={id} />;
      })}
    </main>
  );
}
