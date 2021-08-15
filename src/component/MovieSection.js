import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieSection.css';
import UserContext  from '../AppContext';
import { BrowserRouter, Route, Switch, Redirect,useHistory } from "react-router-dom";
import DetailsPage from '../component/DetailsPage';
function MovieSection() {

  let history = useHistory();
  const [movies,setMovies] = useState([]);  

  useEffect(() => {
    fetch("http://localhost:8080/DVSTORE/allmovies",
        {headers: { 'Authorization': "Bearer "+localStorage.getItem('token') }}
    )
        .then(res => res.json())
        .then(response => setMovies(response));
    }, []);


function redirectDetails(id){
  history.push(`/DetailsPgae/${id}/movieList`);
}

    return (
      <div className="outerMovieSection">
        <div className="MovieSectionTitle">Movies</div>
        <div className="MovieSection">
            {movies.map((movie) =>
              <img className="" onClick={() => redirectDetails(movie.id)} key={movie.id} src={window.location.origin+movie.image_path} alt={movie.name}/>
            )}
        </div>
    </div>
    )
};
    

export default MovieSection;
