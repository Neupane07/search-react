import React from 'react'

const Search = () => {
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
                      <img src="assets/images/icons/arrow-back.png" />
                    </div>
                  </a>
                  <a href="index.html">
                    <div className="round-box close-icon">
                      <img src="assets/images/icons/close-icon.png" />
                    </div>
                  </a>
                </div>
                <div className="tv-data-row">
                  <div className="col-12">
                    <div className="seach-box">
                      <div className="input-group">
                        <span className="input-search">
                          <img src="assets/images/icons/search-icon.png" />
                        </span>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                    <div className="search-block-iteams">
                      <div className="recent-search">
                        <h1>Recent Search Iteams</h1>
                        <div className="seach-item">
                          <span>
                            <img src="assets/images/icons/reload-icon.png" />
                            Jathi Ratnalu Movie
                          </span>
                        </div>
                        <div className="seach-item">
                          <span>
                            <img src="assets/images/icons/reload-icon.png" />
                            Kids English Telugu Dubbed Movies
                          </span>
                        </div>
                        <div className="seach-item">
                          <span>
                            <img src="assets/images/icons/reload-icon.png" />
                            3D Animation Movies
                          </span>
                        </div>
                        <div className="seach-item">
                          <span>
                            <img src="assets/images/icons/reload-icon.png" />
                            Action Movies in Telugu 2020
                          </span></div>
                      </div>
                      <div className="key-board-box" id="show-numbers" style={{display: 'none'}}>
                        <div className="key-board-row">
                          <span className="key"><button>1</button></span>
                          <span className="key"><button>2</button></span>
                          <span className="key"><button>3</button></span>
                          <span className="key"><button> &amp; </button></span>
                          <span className="key"><button> # </button></span>
                          <span className="key"><button> ( </button></span>
                          <span className="key"><button> ) </button></span>
                          <span className="arrow-change"><button>
                              <img src="assets/images/icons/clear-icon.png" />
                            </button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="key"><button>4</button></span>
                          <span className="key"><button>5</button></span>
                          <span className="key"><button>6</button></span>
                          <span className="key"><button> @ </button></span>
                          <span className="key"><button> ! </button></span>
                          <span className="key"><button> ? </button></span>
                          <span className="key"><button> : </button></span>
                          <span className="arrow-change show-alpabets"><button>&amp; ABC</button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="key"><button>7</button></span>
                          <span className="key"><button>8</button></span>
                          <span className="key"><button>9</button></span>
                          <span className="key"><button>0</button></span>
                          <span className="key"><button> . </button></span>
                          <span className="key"><button> _ </button></span>
                          <span className="key"><button> " </button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="space-clear"><button>SPACE</button></span>
                          <span className="space-clear"><button>CLEAR</button></span>
                          <span className="search-btn"><a href="search-results.html"><button>SEARCH</button></a></span>
                        </div>
                      </div>
                      <div className="key-board-box" id="show-alpabets">
                        <div className="key-board-row">
                          <span className="key"><button>A</button></span>
                          <span className="key"><button>B</button></span>
                          <span className="key"><button>C</button></span>
                          <span className="key"><button>D</button></span>
                          <span className="key"><button>E</button></span>
                          <span className="key"><button>F</button></span>
                          <span className="key"><button>G</button></span>
                          <span className="arrow-change"><button>
                              <img src="assets/images/icons/clear-icon.png" />
                            </button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="key"><button>H</button></span>
                          <span className="key"><button>I</button></span>
                          <span className="key"><button>J</button></span>
                          <span className="key"><button>K</button></span>
                          <span className="key"><button>L</button></span>
                          <span className="key"><button>M</button></span>
                          <span className="key"><button>N</button></span>
                          <span className="arrow-change show-numbers"><button> 123</button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="key"><button>O</button></span>
                          <span className="key"><button>P</button></span>
                          <span className="key"><button>Q</button></span>
                          <span className="key"><button>R</button></span>
                          <span className="key"><button>S</button></span>
                          <span className="key"><button>T</button></span>
                          <span className="key"><button>U</button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="key"><button>V</button></span>
                          <span className="key"><button>W</button></span>
                          <span className="key"><button>X</button></span>
                          <span className="key"><button>Y</button></span>
                          <span className="key"><button>Z</button></span>
                          <span className="key"><button>-</button></span>
                          <span className="key"><button>'</button></span>
                        </div>
                        <div className="key-board-row">
                          <span className="space-clear"><button>SPACE</button></span>
                          <span className="space-clear"><button>CLEAR</button></span>
                          <span className="search-btn"><a href="search-results.html"><button>SEARCH</button></a></span>
                        </div>
                      </div>
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
    )
}

export default Search
