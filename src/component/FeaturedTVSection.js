import React,{useEffect,useState} from 'react'
import './FeaturedTVSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel}  from 'react-bootstrap';

function FeaturedTVSection() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/DVSTORE/allfeaturedtvshows",
      {headers: { 'Authorization': "Bearer "+localStorage.getItem('token') }}
    )
    .then(res => res.json())
      .then(response => setMovies(response));
  }, []);

    const imgRender = (movie) =>{
      <img className="" key={movie.id} src={window.location.origin+movie.image_path} alt={movie.name}/>
    };
    return (
      <div>
          <div className="FeaturedTVSectionTitle">Featured Tv Shows</div>
          <div className="FeaturedTVSection">
              {movies.map((movie) =>
                <img className="" key={movie.id} src={window.location.origin+movie.image_path} alt={movie.name}/>
              )}
          </div>
      </div>
    )
};
    

export default FeaturedTVSection;
