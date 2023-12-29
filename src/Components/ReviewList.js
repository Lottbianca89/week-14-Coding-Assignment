//ReviewList.js
import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  return (
    <fieldset className="reviewsContainer">
      <legend>Reviews:</legend>
      {reviews &&
        reviews.map((review, index) => (
          <div key={index} className="reviews">
            <Review review={review} />
          </div>
        ))}
    </fieldset>
  );
};

export default ReviewList;