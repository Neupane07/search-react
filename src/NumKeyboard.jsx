import React from 'react'

const NumKeyboard = ({setShowNumKeyboard}) => {
    return (
        <>
            <div className="key-board-box" id="show-numbers">
                        <div className="key-board-row">
                          <span className="key"><button>1</button></span>
                          <span className="key"><button>2</button></span>
                          <span className="key"><button>3</button></span>
                          <span className="key"><button> &amp; </button></span>
                          <span className="key"><button> # </button></span>
                          <span className="key"><button> ( </button></span>
                          <span className="key"><button> ) </button></span>
                          <span className="arrow-change"><button>
                              <img src="assets/images/icons/clear-icon.png" alt="clear icon" />
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
                          <span className="arrow-change show-alpabets"><button onClick={() => setShowNumKeyboard(false)} >&amp; ABC</button></span>
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
        </>
    )
}

export default NumKeyboard
