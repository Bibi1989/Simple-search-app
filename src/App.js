import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Search from './components/Search'
import './App.css';

import Search from './components/Search'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import IngredientComponent from './components/IngredientComponent';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' >
            <Search />
          </Route>
          <Route exact path='/ingredient' >
            <IngredientComponent />
          </Route>
          <Footer />
          {/* <SearchBar /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
