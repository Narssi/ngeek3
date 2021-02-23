import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portafolio.css';
import '../../style/demo.scss';
import { Link } from 'react-router-dom';


const Portafolio = () => {
    
    return (
    <div className='portafolio'>
            <Row >
                <Col><div className="card-img"></div></Col>
                <Col> 
                    <div className="txtcol">     
                            <h1>Ultimate Design</h1>
                            <h2>ACOMER CLUB</h2> 
                    </div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <div className="txtcol2">
                            <h1>Design & Developer</h1>
                            <h2>PORTAFOLIO</h2>
                            <Link className="ruta" to="/portlist"><button>VIEW +</button></Link>
                    </div>
                </Col>
                <Col><div className="card-img2"></div></Col>
            </Row>
    </div>
    
);
};

export default Portafolio;