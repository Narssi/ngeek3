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
                <Col sm className="setting" key={key} style={{backgroundImage:`linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0.311),
                  rgba(248, 248, 255, 0.993)
                ),url(${diplom.picture})`}}>
                    <div className="Info" >
                        <h1>{diplom.text}</h1>
                        <h2>{diplom.text2}</h2>
                        <div className="button-L" style={{backgroundColor:'black'}}>{diplom.button}</div>
                    </div>
                    <div className="st"></div>
                </Col>
            );
        })}
      </Row>

    </div>
);

export default Reconocimientos;
