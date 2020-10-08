import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchCountry } from './../../../actions/searchCountry';
import { FaSearch } from 'react-icons/fa';

import './Search.scss';
import { ThemeConsumer } from '../../../Context/theme';

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    dispatch(setSearchCountry(searchText));
  }, [searchText, dispatch]);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <div className={`search_box_group ${theme}`}>
          <FaSearch size={22} />
          <input
            type="text"
            name="search-country"
            onChange={handleOnChange}
            value={searchText}
            className="search_box__input"
            placeholder="Search for a country..."
          />
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Search;
