import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container row">
        <h1 className="title">Where in the world?</h1>
        <button className="button">
          <FaRegMoon className="icon" size={18} />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
