//ReviewForm.js
import React, { useState } from "react";
import StarRating from "./StarRatings";

const ReviewForm = ({ movieID, addReview }) => {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");

  const userHandler = (e) => {
    setUser(e.target.value);
  };

  const reviewHandler = (e) => {
    setReview(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const stars = e.target.rating.value;

    addReview(movieID, {
      user,
      review,
      rating: stars,
    });

    resetForm();
  };

  const resetForm = () => {
    setUser("");
    setReview("");
  };

  return (
    <>
      <fieldset className="reviewFormContainer">
        <legend>Add a Review:</legend>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">User name:</label>
          <input
            type="text"
            value={user}
            onChange={userHandler}
            required
          />
          <label htmlFor="review">Review:</label>
          <textarea
            rows="4"
            cols="30"
            value={review}
            onChange={reviewHandler}
            required
          ></textarea>
          <label>Rating:</label>
          <StarRating disabled={false} stars={0} />
          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </>
  );
};

export default ReviewForm;