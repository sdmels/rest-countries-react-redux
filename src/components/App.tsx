import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';

import Countries from './Countries/Countries';
import Country from './Countries/Country';
import Header from '../shared/Header';
import NoMatch from './NoMatch';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/country/:countryCode" exact component={Country} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
