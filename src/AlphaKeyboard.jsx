import React from 'react'

const AlphaKeyboard = ({setShowNumKeyboard}) => {
    return (
        <>
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
                              <img src="assets/images/icons/clear-icon.png" alt="clear icon"/>
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
                          <span className="arrow-change show-numbers"><button onClick={()=>setShowNumKeyboard(true)}> 123</button></span>
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
                          <span className="search-btn"><button>SEARCH</button></span>
                        </div>
                      </div>  
        </>
    )
}

export default AlphaKeyboard
