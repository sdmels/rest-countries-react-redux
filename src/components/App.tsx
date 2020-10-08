import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';

import Countries from './Countries/Countries';
import Country from './Countries/Country';
import Header from '../shared/Header';
import NoMatch from './NoMatch';
import { ThemeProvider } from '../Context/theme';

function App() {
  const [theme, setTheme] = useState('light');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());

    //eslint-disable-next-line
  }, []);

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider value={theme}>
      <Header handleToggleTheme={toggleTheme} />
      <main className={`${theme}`}>
        <Router>
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/country/:countryCode" exact component={Country} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App;
