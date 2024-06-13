import Movie from './Movie';
import './MovieList.css';

function MovieList(props){
  const { movies = [] } = props;
  return <div className="movies">
    {
      movies.length ? movies.map(movie => {
        return <Movie key={movie.imdbID} {...movie}/>
      }) : <h4>По вашему запросу ничего не найдено</h4>
    }
  </div>
}

export default MovieList;