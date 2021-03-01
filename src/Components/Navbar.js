import React, {Component} from 'react';
import '../style/Navbar.css';
import ngk from '../Assets/NGK.svg';
import men from '../Assets/men.svg';
import { Link } from 'react-scroll';


class Navbar extends Component {


    state = { clicked : false};

    handleClick =() => {
        this.setState({clicked: !this.state.clicked});
    }


    render(){
        return(
          <div>
            <nav className="NavBaritems">
                <img src={ngk} className="float-left blk"  alt="lk"></img>
                <div className="menu-icon" onClick={this.handleClick}>
                 <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                    <ul  className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  onClick={this.handleClick}
                  duration= {1500}
                  to="App-header">Home</Link>
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  onClick={this.handleClick}
                  duration= {1500}
                  to="portafolio">Book</Link>
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  onClick={this.handleClick}
                  duration= {1500}
                  to="Reconocimientos">Adwards</Link>
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {1500}
                  onClick={this.handleClick}
                  to="Experiencia">Jobs</Link>
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {1500}
                  onClick={this.handleClick}
                  to="Habilidades">Skills</Link>
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {1500}
                  onClick={this.handleClick}
                  to="Contacto">Contact</Link>
                  </li>
                </ul>
                <div className="objects">

                  <img src={men} className="float-right lk"  alt="lk"></img>
                </div>
            </nav>
          </div>
        );
    }
}

export default Navbar;
