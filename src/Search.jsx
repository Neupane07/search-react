import React,{useState} from 'react'
import AlphaKeyboard from './AlphaKeyboard';
import NumKeyboard from './NumKeyboard';

const Search = () => {
    const [showNumKeyboard,setShowNumKeyboard] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted')
    }

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
                      {showNumKeyboard ? 
                        <NumKeyboard setShowNumKeyboard={setShowNumKeyboard}/> 
                        : 
                        <AlphaKeyboard setShowNumKeyboard={setShowNumKeyboard}/>}
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
