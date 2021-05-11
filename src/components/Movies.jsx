import React from "react";
import { getMovies } from "./services/movieservies"; 
import { getGenres } from "./services/genreservice";
import Like from "./like";
import ListGroup from "./listgroup";
import Pagination from "./pagination";
import { paginate } from "./utilities/paginate";

class Movies extends React.Component {
  state = {
    pageSize: 4,
    currentPage: 1,
    movies: getMovies(),
  };

  componentDidMount(){
    this.setState({ genres: getGenres() , movies: getMovies()})
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter( m => ( m._id !== movie._id))
    this.setState({ movies })
    console.log("delete button")
  }

  handleLike =(movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies.index = { ...movies[index]}
    movies[index].Liked = !movies[index].Liked
    this.setState({ movies })
    console.log("like button clicked", movies)
  }

  handleChange =(page) => { 
   this.setState({ currentPage: page})
  }

  handleSelectList= item =>{

    this.setState({ selectedGenre: item})
    console.log("list group", item)
  }

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, pageSize, currentPage } = this.state; 

    const movies = paginate( allMovies, pageSize, currentPage)
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup 
          onSelectItem={this.handleSelectList}
          items={this.state.genres}
          selectedItem ={this.selectedGenre}
           />
        </div>



      <div className='col' >
        <h5>showing {this.state.movies.length} movies in the list...</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>InStock</th>
              <th>Rate</th>
            </tr>
          </thead>
          {movies.map((movie) => (
            <tbody key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like 

                Liked={movie.Liked}
                onClick={()=> this.handleLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tbody>
          ))}
        </table>

        <Pagination 
        itemsCount ={ count }
        pageSize ={pageSize}
        currentPage={currentPage}
        onPageChange={this.handleChange}
        />
      </div>
      </div>
    );
  }
}

export default Movies;
