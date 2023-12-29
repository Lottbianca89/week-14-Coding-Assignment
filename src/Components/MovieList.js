//MovieList.js
import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, addReview }) => {
  return (
    <section>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} addReview={addReview} />
      ))}
    </section>
  );
};

export default MovieList;