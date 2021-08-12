import React from "react";
import { Link } from "react-router-dom";
import img from './images/image-not-found.jpg'
import backArrow from './images/icons/arrow-back.png'
import closeIcon from './images/icons/close-icon.png'

const SearchResults = ({ movies }) => {
  const renderMovies = movies.map((movie) => {
    let imgUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    return (
      <div className="item" key={movie.id}>
        <Link to="#">
          <img
            src={
              movie.backdrop_path ? imgUrl : img
            }
            alt={movie.original_title}
          />
          <p className="movie-name">{movie.title}</p>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <div className="tv-layout">
        <div className="container-fluid">
          <div className="row">
            <div className="span12">
              <div className="nav-row">
                <Link to="/search">
                  <div className="round-box back-arrow">
                    <img
                      src={backArrow}
                      alt="back arrow"
                    />
                  </div>
                </Link>
                <Link to="/search">
                  <div className="round-box close-icon">
                    <img
                      src={closeIcon}
                      alt="close icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="tv-data-row">
                <h1>Search Results</h1>
                <div className="col-12">
                  <div className="search-results">
                    {renderMovies}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cd-panel cd-panel--from-right js-cd-panel-main">
          <div className="cd-panel__container">
            <a href="#0" className="cd-panel__close js-cd-close">
              X
            </a>
            <div className="cd-panel__content">
              <div className="tv-slide-nav">
                <ul>
                  <li>
                    <a href="login.html">
                      <img src="assets/images/icons/login-icon.png"   alt="icon"/> Login
                    </a>
                  </li>
                  <li>
                    <a href="register.html">
                      <img src="assets/images/icons/register-icon.png" alt="icon" />{" "}
                      Registration
                    </a>
                  </li>
                  <li>
                    <a href="subscription.html">
                      <img src="assets/images/icons/subscrption-icon.png"  alt="icon"/>{" "}
                      Subscription
                    </a>
                  </li>
                  <li>
                    <a href="search.html">
                      <img src="assets/images/icons/search-icon.png"  alt="icon"/> Search
                    </a>
                  </li>
                  <li>
                    <a href="categories.html">
                      <img src="assets/images/icons/categories-icon.png" alt="icon" />{" "}
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
