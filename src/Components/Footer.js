import React from 'react';
import '../Components/Footer.css';
import { Data } from "../Data/data-ngk";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterImg } from '../Data/data-ngk';
const Footer = () => {
    return (
    <div className='Footer'>

        <div className="ngk">
            <Row >
                {FooterImg.map((Footer, key) =>{
                    return(
                        <Col key={key} >
                            <img src={`./assets/footer/${Footer.id}.svg`} className="rounded "  alt="img"/>
                        </Col>
                    );
                })}
            </Row>
         </div>

        {Data.map((Footer, key) =>{
            return(
                <div key={key}>
                    <div  className='corp'>
                        <h1>{Footer.web}</h1>
                        <h2>{Footer.Register} {new Date().getFullYear()}</h2>
                        <p>{Footer.version}</p>
                    </div>
                    <div className="lss"></div>
                </div>
            );
        })}

    </div>
    );
};

export default Footer;

