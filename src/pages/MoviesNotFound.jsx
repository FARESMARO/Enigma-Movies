import React from "react";
import img from "../assets/sddefault.jpg";

export default function MoviesNotFound() {
  const Handelclick = () => (window.location.href = "/");
  return (
    <main>
      <h1 className="text-white text-center text-3xl p-3">Not found 404 </h1>
      <div className="flex justify-center">
        <img src={img} />
      </div>
      <div className="flex justify-center p-3 ">
        <button className="bg-white p-3 rounded-full " onClick={Handelclick}>
          OKAY
        </button>
      </div>
    </main>
  );
}
