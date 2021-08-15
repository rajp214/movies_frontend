import React,{useContext} from 'react'
import './HomeSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bloodshot from '../images/Herosection/Bloodshot_.jpg';
import bumbelbee_hd from '../images/Herosection/bumbelbee_hd.jpg'; 
import hellboy_hd from '../images/Herosection/hellboy_hd.jpg';
import spidermanfarfromhome from '../images/Herosection/spiderman_hd.jpg'; 
import theNewMutants from '../images/Herosection/newmutant_hd.jpg';
import xmen_dark_phoenix from '../images/Herosection/x-men_hd.jpg'; 
import wonderwoman_hd from '../images/Herosection/wonderwoman_hd.jpg'; 
import {Carousel}  from 'react-bootstrap';

function HeroSection() {
    return (
      <Carousel className="hero">
          <Carousel.Item>
            <img className="d-block w-100" src={Bloodshot} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bumbelbee_hd} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hellboy_hd} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={spidermanfarfromhome} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={theNewMutants} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={xmen_dark_phoenix} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wonderwoman_hd} alt="First slide"/>
          </Carousel.Item>
        </Carousel>
    )
};
    

export default HeroSection;
