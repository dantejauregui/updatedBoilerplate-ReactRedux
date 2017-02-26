import React from 'react';
import {
  Match,
  Miss
} from 'react-router';

import Home from './Home';
import About from './About';
import Error404 from './Error404';

/* eslint-disable */
  // To run, in console:
  //
  // 1.- webpack -w
  // 2.- node built/server/index.js
/* eslint-enable */


function Pages() {
  return (
    <main role="application">

      {/* Home */}
      <Match
          pattern="/"
          exactly
          component={Home}
      />

    {/* Pagina de About */}
      <Match
          pattern="/about"
          exactly
          component={About}
      />

      {/* Error 404 */}
      <Miss component={Error404} />
    </main>
  );
}

export default Pages;
