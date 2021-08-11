import React from 'react'
import Search from './Search'
import SearchResults from './SearchResults'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

  return (
    <div>
      <Router>
        <Route path="/search" component={Search}/>
        <Route path="/searchresults" component={SearchResults}/>
      </Router>
    </div>
  )
}

export default App

