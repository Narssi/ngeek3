import React, {Component} from 'react';
import '../style/Navbar.css';
//import ng from '../Assets/ng.png';
//import men from '../Assets/men.svg';
//import { Link } from 'react-scroll';

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
                      <Nav.Link href='/about'><span data-hover='ABOUT'>About</span></Nav.Link>
                      <Nav.Link href='/'><span data-hover='BOOK'>Portfolio</span></Nav.Link>
                      <Nav.Link href='/rewards'><span data-hover='REWARDS'>Rewards</span></Nav.Link>
                      <Nav.Link href='/contact'><span data-hover='CONTACT'>Contact</span></Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

        );
    }
}

export default Navbars;
