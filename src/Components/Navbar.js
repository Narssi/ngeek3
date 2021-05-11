import React, {Component} from 'react';
import '../style/Navbar.css';
import ng from '../Assets/ng.png';
//import men from '../Assets/men.svg';
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
                  to="App-header">About</Link>
                  </li>
                  <li>
                  Portfolio
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  onClick={this.handleClick}
                  duration= {1500}
                  to="Reconocimientos">Rewards</Link>
                  </li>
                  <li>
                  <Link
                  activeClass = "active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {1500}
                  onClick={this.handleClick}
                  to="Experiencia">Contact</Link>
                  </li>
                </ul>
            </nav>
          </div>
        );
    }
}

export default Navbar;
