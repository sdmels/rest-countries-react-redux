import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './Search.scss';

const Search = () => {
  return (
    <div className="search_box_group">
      <FaSearch size={22} />
      <input type="text" className="search_box__input" placeholder="Search for a country..." />
    </div>
  );
};

export default Search;
