import React from 'react'
import { Link } from 'react-router-dom'

const SearchResults = () => {
  

    return (
        <div>
            <div className="tv-layout">
        <div className="container-fluid">
          <div className="row">
            <div className="span12">
              <div className="nav-row">
                <Link to="/search">
                  <div className="round-box back-arrow">
                    <img src="assets/images/icons/arrow-back.png" alt="back arrow" />
                  </div>
                </Link>
                <Link to="/search">
                  <div className="round-box close-icon">
                    <img src="assets/images/icons/close-icon.png" alt="close icon"/>
                  </div>
                </Link>
              </div>
              <div className="tv-data-row">
                <h1>Search Results</h1>
                <div className="col-12">
                  <div className="search-results">
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Telugu/Thumbnails/Master-thumb.jpg" />
                        <p className="movie-name">Master (Telugu)</p>
                    </a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Telugu/Thumbnails/krack-thumb.jpg" />
                        <p className="movie-name">Crack (Telugu)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Telugu/Thumbnails/jathiratnalu-thumb.jpg" />
                        <p className="movie-name">Jathiratnalu (Telugu)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Telugu/Thumbnails/Gali-Sampath-thumb.jpg" />
                        <p className="movie-name">Gali Sampath (Telugu)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Telugu/Thumbnails/Aranya-thumb.jpg" />
                        <p className="movie-name">Aranya (Telugu)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/English/Thumbnails/aquaman-thumb.jpg" />
                        <p className="movie-name">Aquaman (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/English/Thumbnails/kong-skull-island-thumb.jpg" />
                        <p className="movie-name">KONG Skull Island (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/English/Thumbnails/parasite-thumb.jpg" />
                        <p className="movie-name">Parasite (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/English/Thumbnails/the-revenant-thumb.jpg" />
                        <p className="movie-name">The Revenant (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/English/Thumbnails/wonderwoman1984-thumb.jpg" />
                        <p className="movie-name">Wonder Women 84 (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Kids-English/Thumbnails/angry-birds-thumb.jpg" />
                        <p className="movie-name">Angry Birds (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Kids-English/Thumbnails/frozen-thumb.jpg" />
                        <p className="movie-name">Frozen (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Kids-English/Thumbnails/ice-age-thumb.jpg" />
                        <p className="movie-name">Ice Age (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Kids-English/Thumbnails/Jungle-Book-thumb.jpg" />
                        <p className="movie-name">The Jungle Book (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Kids-English/Thumbnails/wonder-park-thumb.jpg" />
                        <p className="movie-name">Wonder Park (English)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Hindi/Thumbnails/baagi-3-thumb.jpg" />
                        <p className="movie-name">Baaghi3 (Hindi)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Hindi/Thumbnails/Bajirao-Mastani-thumb.jpg" />
                        <p className="movie-name">Bajirao Mastani (Hindi)</p></a>
                    </div>
                    <div className="item">
                      <a href="#">
                        <img src="assets/images/Hindi/Thumbnails/bharat-thumb.jpg" />
                        <p className="movie-name">Bharat (Hindi)</p></a>
                    </div>
                    <div className="item"><a href="#">
                        <img src="assets/images/Hindi/Thumbnails/chhichhore-thumb.jpg" />
                        <p className="movie-name">Chhichhore (Hindi)</p></a>
                    </div>
                    <div className="item"><a href="#">
                        <img src="assets/images/Hindi/Thumbnails/mission-mangal-thumb.jpg" />
                        <p className="movie-name">Mission Mangal (Hindi)</p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cd-panel cd-panel--from-right js-cd-panel-main">
          <div className="cd-panel__container">
            <a href="#0" className="cd-panel__close js-cd-close">X</a>
            <div className="cd-panel__content">
              <div className="tv-slide-nav">
                <ul>
                  <li>
                    <a href="login.html">
                      <img src="assets/images/icons/login-icon.png" /> Login</a>
                  </li>
                  <li>
                    <a href="register.html">
                      <img src="assets/images/icons/register-icon.png" /> Registration</a>
                  </li>
                  <li>
                    <a href="subscription.html">
                      <img src="assets/images/icons/subscrption-icon.png" /> Subscription</a>
                  </li>
                  <li>
                    <a href="search.html">
                      <img src="assets/images/icons/search-icon.png" /> Search</a>
                  </li>
                  <li>
                    <a href="categories.html">
                      <img src="assets/images/icons/categories-icon.png" /> Categories</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SearchResults
