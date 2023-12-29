//Review.js
import React from "react";
import StarRatings from "./StarRatings";

const Review = ({ review }) => {
  return (
    <div className="reviewContainer">
      <p className="reviewUser">{review.user}</p>
      <p className="review">{review.review}</p>
      <StarRatings stars={review.rating} disabled={true} />
    </div>
  );
};

export default Review;