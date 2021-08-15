import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TvShowsSection.css';
import UserContext  from '../AppContext';
import { BrowserRouter, Route, Switch, Redirect,useHistory } from "react-router-dom";
import DetailsPage from '../component/DetailsPage';
function TvShowsSection() {
  let history = useHistory();
  const [tvShows,setTvShows] = useState([]);  

  useEffect(() => {
    fetch("http://localhost:8080/DVSTORE/alltvshows",
        {headers: { 'Authorization': "Bearer "+localStorage.getItem('token') }}
    )
        .then(res => res.json())
        .then(response => setTvShows(response));
    }, []);

    function redirectDetails(id){
      history.push(`/DetailsPgae/${id}/tvshowsList`);
    }

    return (
      <div className="outerTvShowSection">
        <div className="TvShowsSectionTitle">Tv Shows</div>
        <div className="TvShowsSection">
            {tvShows.map((tvShow) =>
              <img className="" key={tvShow.id} onClick={() => redirectDetails(tvShow.id)} src={window.location.origin+tvShow.image_path} alt={tvShow.name}/>
            )}
        </div>
    </div>
    )
};
    

export default TvShowsSection;
