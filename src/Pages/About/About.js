import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
//import {Aboutdata} from '../../Data/data-ngk';
import Logo from '../../Components/Logo';
const About = ({
    id,
    tittle,
    picture,
}) => {
    return(


        

    <div className="Perfil">

        
         <Row className="demo">
            <Col sm>
                <div className="demosl">
                    <Logo/>
                </div>
             </Col>
             <Col>
                <div className="perfil">
                  
                </div>
             </Col>
            </Row>

          
        
    </div>

);};

export default About;