import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite} from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);//tener cuidado con lo que pedimos 
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {
           this.props.movies?.map(m=>
            <div key={m.imdbID}>
              <Link to={`/movie/${m.imdbID}`}>
              <li>{m.Title}</li>
              </Link>
              <button onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}>Fav</button>

            </div>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}



export default connect(mapStateToProps, {getMovies, addMovieFavorite})(Buscador);
