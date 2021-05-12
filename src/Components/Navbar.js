import React, {Component} from 'react';
import '../Components/Navbar.css';
import ng from '../Assets/ng.png';
//import men from '../Assets/men.svg';
//import { Link } from 'react-scroll';
import Logo from '../Components/Logo';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navbars extends Component {

    render(){
        return(
          <div className='effect'>   
            <Navbar collapseOnSelect  expand='lg' className='back'>
              <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='nav-menu effect-nav'>
                      <Nav.Link href='/about'><span data-hover='ABOUT'>ABOUT</span></Nav.Link>
                      <Nav.Link href='/'><span data-hover='PORTFOLIO'>PORTFOLIO</span></Nav.Link>
                      <Nav.Link href='/rewards'><span data-hover='REWARDS'>REWARDS</span></Nav.Link>
                      <Nav.Link href='/contact'><span data-hover='CONTACT'>CONTACT</span></Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

        );
    }
}

export default Navbars;
