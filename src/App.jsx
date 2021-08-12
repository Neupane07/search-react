//https://image.tmdb.org/t/p/w500
import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Router>
        <Route
          path="/search"
          component={() => <Search movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/searchresults"
          component={() => (
            <SearchResults movies={movies} setMovies={setMovies} />
          )}
        />
        <Redirect from="/" to="/search" />
      </Router>
    </div>
  );
};

export default App;
