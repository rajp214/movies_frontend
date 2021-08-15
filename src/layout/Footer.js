import React from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
      <div className="footerBg">
            <div className="footerClass">
                  <Navbar>
                        <Navbar.Brand href="#home" className="title">MoviesDot.com</Navbar.Brand>
                  </Navbar>
                  <div className="outernavdiv">
                        <div className="flex-container">
                              <Link to='/'>Watch</Link>
                              <Link to='/'>Spotlight</Link>
                              <Link to='/'>Movies</Link>
                              <Link to='/'>Tv</Link>
                        </div>

                        <div className="flex-container">
                              <Link to='/'>My Account</Link>
                              <Link to='/'>My MoviesDot.com</Link>
                              <Link to='/'>Account</Link>
                              <Link to='/'>Setting</Link>
                        </div>

                        <div className="flex-container">
                              <Link to='/'>Feature</Link>
                              <Link to='/'>List</Link>
                              <Link to='/'>Family</Link>
                              <Link to='/'>Movies AnyWhere</Link>
                        </div>

                        <div className="flex-container">
                              <Link to='/'>Help</Link>
                              <Link to='/'>About</Link>
                              <Link to='/'>Support</Link>
                              <Link to='/'>ContactUS</Link>
                        </div>
                  </div>
                  <div style={{"font-size": "40px"}}>
                        <Link  href="https://www.instagram.com"><FaInstagram style={{"background":"linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"}}/></Link>
                        <Link  to="https://www.facebook.com"><FaFacebookF color="#29487d"/></Link>
                        <Link  to="https://www.youtube.com"><AiFillYoutube color="red"/></Link>
                        <Link  to="https://www.linkedin.com"><AiFillLinkedin color="#0a66c2"/></Link>
                  </div>
            </div>
      </div>
    )
};
    

export default Footer;
