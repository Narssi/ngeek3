import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
//import {Aboutdata} from '../../Data/data-ngk';
import Logo from '../../Components/Logo';
import nar from '../../Assets/d.jpg';
const About = () => {
    return(

    <div className="perfil">
         <Row className="demo">
            <Col sm>
                <div>
                    <Logo/>
                </div>
             </Col>
             <Col>
                <div>
                    <img src={nar} className="float-center dm"  alt="lk"></img>
                </div>
             </Col>
            </Row>

            <Row className="demo">
            <Col sm>
                <div>
                    <Logo/>
                </div>
             </Col>
             <Col>
                <div>
                    <Logo/>
                </div>
             </Col>
             <Col>
                <div>
                    <Logo/>
                </div>
             </Col>
            </Row>
        
    </div>

);};

export default About;