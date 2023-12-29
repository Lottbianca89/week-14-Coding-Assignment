// Components/StarRatings.js
import React, { useState } from "react";

const StarRating = ({ stars, disabled }) => {
  const [rating, setRating] = useState(stars);

  return (
    <div className="starRating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              disabled={disabled}
              checked={ratingValue === rating}
              onChange={() => setRating(ratingValue)}
            />
            <span
              role="img"
              aria-label={`star ${
                ratingValue <= rating ? "filled" : "empty"
              }`}
              style={{
                fontSize: "15px",
                color: ratingValue <= rating ? "purple" : "#e4e5e9",
              }}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;