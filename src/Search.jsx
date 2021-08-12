//6353529a86e99faf4c5a103a3e9e17fd
import React, { useState, useRef } from "react";
import AlphaKeyboard from "./AlphaKeyboard";
import NumKeyboard from "./NumKeyboard";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import backArrow from "./images/icons/arrow-back.png";
import crossButton from "./images/icons/close-icon.png";
import searchIcon from "./images/icons/search-icon.png";
import reloadIcon from "./images/icons/reload-icon.png";

const Search = ({ movies, setMovies }) => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [showNumKeyboard, setShowNumKeyboard] = useState(false);
  const inputRef = useRef();

  const recentItems = localStorage.getItem("recents");
  console.log(recentItems && JSON.parse(recentItems));
  const { recents } = JSON.parse(recentItems) || { recents: undefined };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    const t = localStorage.getItem("recents");
    if (t) {
      let { recents } = JSON.parse(t);
      if (recents.length > 3) {
        recents = recents.slice(0, 3);
      }
      const temp = {
        recents: [input, ...recents],
      };
      localStorage.setItem("recents", JSON.stringify(temp));
    } else {
      localStorage.setItem("recents", JSON.stringify({ recents: [input] }));
    }
    console.log("submitted");
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6353529a86e99faf4c5a103a3e9e17fd&language=en-US&query=${input}&page=1&include_adult=false`
    );
    setMovies(data.results);
    history.push("/searchresults");
  };

  const handleRecent = async (recent) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6353529a86e99faf4c5a103a3e9e17fd&language=en-US&query=${recent}&page=1&include_adult=false`
    );
    setMovies(data.results);
    history.push("/searchresults");
  };

  return (
    <div>
      <div>
        <div className="tv-layout">
          <div className="container-fluid">
            <div className="row">
              <div className="span12">
                <div className="nav-row">
                  <Link to="/search">
                    <div className="round-box back-arrow">
                      <img src={backArrow} alt="icon" />
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="round-box close-icon">
                      <img src={crossButton} alt="icon" />
                    </div>
                  </Link>
                </div>
                <div className="tv-data-row">
                  <div className="col-12">
                    <div className="seach-box">
                      <div className="input-group">
                        <span className="input-search">
                          <img src={searchIcon} alt="icon" />
                        </span>
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          className="form-control"
                          placeholder="Search"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          ref={inputRef}
                        />
                      </div>
                    </div>
                    <div className="search-block-iteams">
                      <div className="recent-search">
                        <h1>Recent Search Items</h1>
                        {recents &&
                          recents.map((recent) => {
                            return (
                              <div
                                className="seach-item"
                                onClick={() => handleRecent(recent)}>
                                <span>
                                  <img src={reloadIcon} alt="reload icon" />
                                  {recent}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                      {showNumKeyboard ? (
                        <NumKeyboard
                          setShowNumKeyboard={setShowNumKeyboard}
                          setInput={setInput}
                          input={input}
                          handleSubmit={handleSubmit}
                          ref={inputRef}
                        />
                      ) : (
                        <AlphaKeyboard
                          setShowNumKeyboard={setShowNumKeyboard}
                          setInput={setInput}
                          input={input}
                          handleSubmit={handleSubmit}
                          ref={inputRef}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Search;
