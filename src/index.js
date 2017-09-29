import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyCrLqcqep0D6lfTYwSkvA6uDcPrz6WnzpY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
)};

ReactDOM.render(<App />, document.querySelector('.container'));
