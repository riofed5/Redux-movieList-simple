import React, { Component } from 'react';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MovieList';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1> List of Movies</h1>
        <div className="container"> 
          <MoviesList />
          <MovieDetails />
        </div>

      </div>
    )
  }
}
