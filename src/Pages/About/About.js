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
               
                <div>
                    <h1>{tittle}</h1>
                <h1>“Don’t let the noise of others’ opinions drown out your own inner voice.”</h1>
                <ul className="flex-container">

                    <li className="flex-item">1</li>
                    <li className="flex-item">2</li>
                    <li className="flex-item">3</li>
                    <li className="flex-item">4</li>
                   
                </ul>
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