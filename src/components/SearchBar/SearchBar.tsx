import React from 'react';
import './SearchBar.css';

type SearchBarProps = {
  setSearchText: (newSearchText: string) => void;
};

const SearchBar = ({ setSearchText }: SearchBarProps) => {
  return (
    <div className="searchBar" data-testid="search-bar">
      <input
        type="text"
        data-testid="search-input-text"
        onChange={(e) => setSearchText(e.target.value)}
        className="searchField"
      />
    </div>
  );
};

export default SearchBar;
