import React from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { ThemeConsumer } from '../Context/theme';

import './Header.scss';

const Header = ({ handleToggleTheme }) => {
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <header className={`header ${theme}`}>
            <div className="container">
              <div className="row">
                <h1 className="title">Where in the world?</h1>
                <button className="button" onClick={handleToggleTheme}>
                  <FaRegMoon className="icon" size={18} />
                  {theme === 'light' ? `Dark` : `Light`} Mode
                </button>
              </div>
            </div>
          </header>
        )}
      </ThemeConsumer>
    </>
  );
};

export default Header;
