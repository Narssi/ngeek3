import React from 'react';
import './Reconocimientos.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';
import {DiplomasData} from '../../Data/data-ngk';


const Reconocimientos = () => (
    <div className='Reconocimientos'>
      <Row>
        {DiplomasData.map((diplom, key) =>{
            return(
                <Col sm className="setting" key={key} style={{backgroundImage:`url(${diplom.picture})`}}>
                    <div className="Info" >
                        <h1>{diplom.text}</h1>
                    </div>
                    <div className="st"></div>
                </Col>
            );
        })}
      </Row>

    </div>
);

export default Reconocimientos;