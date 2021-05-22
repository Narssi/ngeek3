import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
//import {Aboutdata} from '../../Data/data-ngk';
import Logo from '../../Components/Logo';
import carrer from '../../Assets/carrers.svg';
import experience from '../../Assets/experience.svg'
import schol from '../../Assets/school.svg'
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

                    <li className="flex-item"><img src={experience} className="rounded float-left lk"  alt="lk"></img></li>
                    <li className="flex-item"><img src={carrer} className="rounded float-left lk"  alt="lk"></img></li>
                    <li className="flex-item"><img src={schol} className="rounded float-left lk"  alt="lk"></img></li>
                   
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