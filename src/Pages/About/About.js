import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import {AboutInfo, AboutIcons} from '../../Data/data-ngk';
import Logo from '../../Components/Logo';

const About = () => {
    return(

    <div className="Perfil">
         <Row className="aboutbody">
            <Col sm>
                <Logo/> 
                    <div>
                        {AboutInfo.map((textinfo, key)=>{
                            return(
                            <div key={key} className="aboutxt">
                                    <h1>{textinfo.tittle}</h1>
                                    <h2>{textinfo.text}</h2>
                                    <p>{textinfo.arts}</p>
                            </div>
                            );
                        })}
                        <div className="flex-icons">
                        {AboutIcons.map((imginfo, key)=>{
                            return(
                            <div key={key} className="flex-icon">
                                <img  src={`./assets/about/${imginfo.id}.png`}  alt="img"/> 
                            </div> 
                            );
                        })}
                        </div>
                    </div>  
             </Col>
             <Col>
                <div className="perfil"></div>
             </Col>
        </Row>
    </div>

);};

export default About;