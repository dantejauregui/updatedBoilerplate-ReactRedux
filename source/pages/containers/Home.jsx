import React, { Component } from 'react';
/* eslint-disable */
  //notar que al traer {Component}, esto permitira crear COMPONENTES usando CLASS
/* eslint-enable */

import { Link } from 'react-router';


class Home extends Component {
  render() {
    return (
      <section name="about">
        <h1>Home</h1>

        <Link to="/about">
          Go to About
        </Link>
        <Link to="/random">
          Go to Random
        </Link>
      </section>
    );
  }
}

export default Home;
