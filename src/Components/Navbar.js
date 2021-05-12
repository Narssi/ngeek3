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
              <Nav className='nav-menu1 effect-nav'>
                      <Nav.Link href='/about'><span data-hover='ABOUT'>About</span></Nav.Link>
                      <Nav.Link href='/'><span data-hover='BOOK'>Portfolio</span></Nav.Link>
                      <Nav.Link href='/Reconocimientos'><span data-hover='REWARDS'>Rewards</span></Nav.Link>
                      <Nav.Link href='/Experiencia'><span data-hover='CONTACT'>Contact</span></Nav.Link>
                  </Nav>

                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='nav-menu'>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/'>Portfolio</Nav.Link>
                        <Nav.Link href='/Reconocimientos'>Rewards</Nav.Link>
                        <Nav.Link href='/Experiencia'><span data-hover='CONTACT'>Contact</span></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar>
          
          
          </div>

        );
    }
}

export default Navbars;
