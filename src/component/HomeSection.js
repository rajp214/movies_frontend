import React,{useContext} from 'react'
import './HomeSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext  from '../AppContext';
import HeroSection  from './HeroSection';
import FeaturedMovieSection  from './FeaturedMovieSection';
import FeaturedTVSection  from './FeaturedTVSection';

function HomeSection() {
    return (
      <React.Fragment>
        <HeroSection />
        <FeaturedMovieSection />
        <FeaturedTVSection />
      </React.Fragment>
    )
};
    

export default HomeSection;
