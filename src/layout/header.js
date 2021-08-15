import React,{useContext} from 'react'
import './header.css';
import {Navbar,Nav,OverlayTrigger,Popover,Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { FaRegUser } from 'react-icons/fa';
import UserContext  from '../AppContext';
import { useHistory } from 'react-router-dom';
function Header() {
  let history = useHistory();
  const [value, setValue] = useContext(UserContext);
  
  function handleClick (ob) {
    history.push('/');
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{value}</Popover.Title>
      <Popover.Content><Button as={Link} to="/" onClick={handleClick(this)}>Logout</Button></Popover.Content>
    </Popover>
  );

    return (
      <div className="navbarBg">
          <Navbar className="container-fluid">
          <Navbar.Brand as={Link} to="/" className="title">MoviesDot.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/tvshows">TV   </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="mr-auto justify-content-end">
              <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
              <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
              {value == '' ? '':
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <Button><FaRegUser /></Button>
                </OverlayTrigger>
              }
          </Nav>
        </Navbar>
      </div>
    )
};
    

export default Header;
