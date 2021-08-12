//6353529a86e99faf4c5a103a3e9e17fd
import React, { useState,useRef,useEffect } from "react";
import AlphaKeyboard from "./AlphaKeyboard";
import NumKeyboard from "./NumKeyboard";
import { useHistory } from "react-router";
import axios from "axios";
import backArrow from './images/icons/arrow-back.png'
import closeIcon from './images/icons/close-icon.png'
import searchIcon from './images/icons/search-icon.png'
import reloadIcon from './images/icons/reload-icon.png'

const Search = ({ movies, setMovies }) => {
  const inputRef = useRef();
  const history = useHistory();
  const [input, setInput] = useState("");
  const [showNumKeyboard, setShowNumKeyboard] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6353529a86e99faf4c5a103a3e9e17fd&language=en-US&query=${input}&page=1&include_adult=false`
    );
    setMovies(data.results);
    history.push("/searchresults")
  };

  const recentSearchItems = ['Jathi Ratnalu Movie','Kids English Telugu Dubbed Movies','3D Animation Movies','Action Movies']
  const renderRecentSearchItems = recentSearchItems.map(item => {
    return(
      <div className="seach-item" key={item}>
        <span>
          <img 
            src={reloadIcon}
            alt="reload icon"
          />
          {item}
        </span>
      </div>
    )
  })
  return (
    <div>
      <div>
        <div className="tv-layout">
          <div className="container-fluid">
            <div className="row">
              <div className="span12">
                <div className="nav-row">
                  <a href="index.html">
                    <div className="round-box back-arrow">
                      <img
                        src={backArrow}
                        alt="icon"
                      />
                    </div>
                  </a>
                  <a href="index.html">
                    <div className="round-box close-icon">
                      <img
                        src={closeIcon}
                        alt="icon"
                      />
                    </div>
                  </a>
                </div>
                <div className="tv-data-row">
                  <div className="col-12">
                    <div className="seach-box">
                      <div className="input-group">
                        <span className="input-search">
                          <img
                            src={searchIcon}
                            alt="icon"
                          />
                        </span>
                        <form onSubmit={handleSubmit}>
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
                        </form>
                      </div>
                    </div>
                    <div className="search-block-iteams">
                      <div className="recent-search">
                        <h1>Recent Search Items</h1>
                        {renderRecentSearchItems}
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

export default Search
