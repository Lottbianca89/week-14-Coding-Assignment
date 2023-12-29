import React, { useState, useEffect, useCallback } from "react";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import StarRatings from "./Components/StarRatings";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    try {
      // Simulate API fetch by setting moviesData
      const moviesData = [
        {
          title: 'The Cell',
          director: 'Tarsem Singh',
          releaseYear: 2016,
          image: 'https://m.media-amazon.com/images/M/MV5BMTEzNTQ2OTYxMjheQTJeQWpwZ15BbWU4MDc0OTkzNzgx._V1_FMjpg_UX1000_.jpg',
          rating: '4.5/5',
          synopsis: 'In "The Cell," directed by Tarsem Singh, a psychological thriller unfolds as a unique technology allows a psychologist to enter the mind of a comatose serial killer. As she navigates the surreal landscapes of his subconscious, a race against time begins to save the latest victim and unravel the mysteries hidden within the killer\'s twisted psyche.',
        },
        {
          title: 'Acrimony',
          director: 'Tyler Perry',
          releaseYear: 2018,
          image: 'https://www.newdvdreleasedates.com/images/posters/large/tyler-perrys-acrimony-2018.jpg',
          rating: '3.9/5',
          synopsis: 'Directed by Tyler Perry, "Acrimony" explores the complexities of love, betrayal, and vengeance. The film delves into the tumultuous relationship between a devoted wife and her unfaithful husband, unraveling a story of passion, resentment, and the consequences of broken promises.',
        },
        {
          title: 'Twilight',
          director: 'Catherine Hardwicke',
          releaseYear: 2008,
          image: 'https://themonitormmc.com/wp-content/uploads/2021/01/twilight.jpg',
          rating: '4.0/5',
          synopsis: '"Twilight," directed by Catherine Hardwicke, introduces us to the enchanting world of vampires and werewolves. Based on the popular novel, the film follows the romantic journey of Bella Swan and Edward Cullen as they navigate the challenges of a love that transcends the boundaries between the supernatural and the human.',
        }
      ];

      setMovies(moviesData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setError("An error occurred while fetching movie data");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchMovies();
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, [fetchMovies]);

  const addReview = (movieID, review) => {
    const newMovies = [...movies];
    const index = newMovies.findIndex((movie) => movie.id === movieID);
    newMovies[index].reviews.push(review);
    setMovies(newMovies);
  };

  const containerStyle = {
    width: "800px",
    margin: "auto",
  };

  const loadingErrorStyle = {
    color: "#ff0000",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <Header />
      {isLoading ? (
        <p style={loadingErrorStyle}>Loading...</p>
      ) : error ? (
        <p style={loadingErrorStyle}>{error}</p>
      ) : (
        <>
          <MovieList movies={movies} addReview={addReview} />
          {movies.map((movie) => (
            <div key={movie.title}>
              <h3>{movie.title}</h3>
              <p>{movie.synopsis}</p>
              <StarRatings stars={movie.rating} disabled={false} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;