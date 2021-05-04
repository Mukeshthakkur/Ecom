import React from "react";
import { getMovies } from "./services/movieservies";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>InStock</th>
              <th>Rate</th>
            </tr>
          </thead>
          {this.state.movies.map((movie) => (
            <tbody>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>   
              <td></td>
              <td><button className="btn btn-danger">Delete</button></td>            
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Movies;
