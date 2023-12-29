//Movie.js
import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Movie = ({ movie, addReview }) => {
  const calculatedRating = "Calculate Rating Here"; 

  return (
    <article key={movie.id}>
      <h3>
        {movie.title} - {movie.releaseYear}
      </h3>
      <header>
        <img className="thumbnail" src={movie.image} alt={movie.title} />
        <div className="details">
          <p>{movie.synopsis}</p>
          <h4>Rating: {calculatedRating}</h4>
        </div>
      </header>
      <aside>
        <ReviewList reviews={movie.reviews} />
        <ReviewForm movieID={movie.id} addReview={addReview} />
      </aside>
    </article>
  );
};

export default Movie;