import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Countries from './Countries/Countries';
import Country from './Countries/Country';
import Header from '../shared/Header';
import NoMatch from './NoMatch';

function App() {
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
